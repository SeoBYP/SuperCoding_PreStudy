const form = document.querySelector('#signup-form');

const checkPassword = () => {
  const formdata = new FormData(form);
  const password1 = formdata.get('password');
  const password2 = formdata.get('password2');

  return password1 === password2;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formdata = new FormData(form);

  const div = document.querySelector('#info');
  if (!checkPassword()) {
    div.innerText = '비밀번호가 같지 않습니다.';
    div.style.color = 'red';
  }

  const sha256Password = sha256(formdata.get('password'));
  formdata.set('password', sha256Password);
  console.log(sha256Password);

  const res = await fetch('/signup', {
    method: 'post',
    body: formdata,
  });
  const data = await res.json();
  if (data === '200') {
    alert('회원 가입에 성공했습니다.');
    window.location.pathname = '/login.html';
  }
};

form.addEventListener('submit', handleSubmit);
