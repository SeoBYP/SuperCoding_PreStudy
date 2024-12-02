const handleSubmitForm = async (event) => {
  event.preventDefault();
  const accessToken = window.localStorage.getItem('token');
  const body = new FormData(form);
  body.append('insertAt', new Date().getTime());
  try {
    const res = await fetch('/items', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body,
    });
    const data = await res.json();
    console.log(data);
    if (data === '200') {
      window.location.pathname = '/';
    }
  } catch (e) {
    console.error(e);
  }
};

const form = document.getElementById('write-form');
form.addEventListener('submit', handleSubmitForm);
