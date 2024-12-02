from fastapi import FastAPI,UploadFile,Form,Response,Depends
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.staticfiles import StaticFiles
from typing import Annotated
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
import sqlite3;

con = sqlite3.connect('db.db',check_same_thread=False)
cur = con.cursor()

cur.execute(f"""
            CREATE TABLE IF NOT EXISTS items(
              id INTEGER PRIMARY KEY,
              title TEXT NOT NULL,
              image BLOB,
              price INTEGER NOT NULL,
              description TEXT,
              place TEXT NOT NULL,
              insertAt INTEGER NOT NULL
            );
            """)

app = FastAPI()

SECRET = "super_coding"
manager = LoginManager(SECRET,'/login')

@manager.user_loader()
def query_user(data):
  WHERE_STATEMENTS = f'id="{data}"'
  
  if type(data) == dict:
    WHERE_STATEMENTS = f'''id="{data['id']}"'''
    
  con.row_factory = sqlite3.Row
  cur = con.cursor()
  user = cur.execute(f"""
      SELECT * from users WHERE {WHERE_STATEMENTS}
  """).fetchone()
  return user



@app.post('/signup')
def signup(id:Annotated[str,Form()],
           password:Annotated[str,Form()],
           name:Annotated[str,Form()],
           email:Annotated[str,Form()]):

    cur.execute(f"""
                INSERT INTO users(id,name,email,password)
                VALUES('{id}','{name}','{email}','{password}')
                """)
    con.commit()
    print(id,password)
    return '200'

@app.post('/login')
def login(id:Annotated[str,Form()],
          password:Annotated[str,Form()]):
  user = query_user(id)
  if not user:
    raise InvalidCredentialsException
  elif password != user['password']:
    raise InvalidCredentialsException
  
  
  # "sub" (Subject) Claim 번역
  # "sub" (주체) 클레임은 JWT의 주체가 되는 주요 대상을 식별합니다. JWT에 포함된 클레임은 일반적으로 주체에 대한 진술입니다. "sub" 값은 반드시 발급자(issuer)의 문맥에서 로컬로 고유하거나, 전역적으로 고유해야 합니다.
  # 이 클레임의 처리는 일반적으로 애플리케이션에 따라 다릅니다. "sub" 값은 대소문자를 구분하는 문자열이며, StringOrURI 값을 포함해야 합니다.
  # 이 클레임의 사용은 선택적입니다.
  # 아래의 코드는 문자열이 아닌 JSON 객체로 sub 클레임을 구성하고 있어서 '/item'에서 JWT 인증을 할 때 오류가 발생합니다.
  access_token = manager.create_access_token(data = {
    'sub': {
      'id': user['id'],
      'name': user['name'],
      'email': user['email'],
    }
  })

  # sub 필드는 문자열로 구성되어야 함
  access_token = manager.create_access_token(data={
      'sub': user['id'],  # 사용자 ID만 포함
      'name': user['name'],
      'email': user['email'],
  })

  return {'access_token':access_token}


@app.post('/items')
async def create_item(image:UploadFile,
                title:Annotated[str,Form()],
                price:Annotated[int,Form()],
                description:Annotated[str,Form()],
                place:Annotated[str,Form()],
                insertAt:Annotated[int,Form()],
                user=Depends(manager)):
  
  image_bytes = await image.read()
  cur.execute(f"""
              INSERT INTO items(title,image,price,description,place,insertAt)
              VALUES('{title}','{image_bytes.hex()}',{price},'{description}','{place}',{insertAt})
              """)
  con.commit()
  return '200'

@app.get('/items')
async def get_items(user=Depends(manager)):
  con.row_factory =sqlite3.Row
  cur = con.cursor()
  rows = cur.execute(f"""
                     SELECT * FROM items;
                     """).fetchall()
  
  return JSONResponse(jsonable_encoder(dict(row) for row in rows))


@app.get('/items/{item_id}')
async def get_image(item_id):
  cur = con.cursor()
  # 16 진법
  image_byte = cur.execute(f"""
                           SELECT image from items WHERE id = {item_id}
                           """).fetchone()[0]
  
  return Response(content=bytes.fromhex(image_byte),media_type='image/*')


app.mount("/",StaticFiles(directory="frontend",html=True),name="frontend")


