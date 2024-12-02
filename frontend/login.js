const form = document.querySelector('#login-form');

const handleSubmit = async (event) => {
  event.preventDefault();
  const formdata = new FormData(form);

  const sha256Password = sha256(formdata.get('password'));
  formdata.set('password', sha256Password);

  const res = await fetch('/login', {
    method: 'post',
    body: formdata,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem('token', accessToken);

  const infoDiv = document.querySelector('#info');
  infoDiv.innerText = '로그인되었습니다.';

  if (res.status === 200) {
    alert('로그인에 성공했습니다.');
    window.location.pathname = '/';
  } else if (res.status === 401) {
    alert('아이디 혹은 패스워드가 틀렸습니다.');
  }
};

form.addEventListener('submit', handleSubmit);
