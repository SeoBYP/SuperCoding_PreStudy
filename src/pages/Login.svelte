<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { user$ } from '../Store';
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
      // ...
    }
  };
</script>

<div>로그인하기</div>
<button class="login-button" on:click={loginWithGoogle}>
  <img
    class="google-logo"
    src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY"
    alt="google-logo"
  />
  <div>Google로 시작하기</div>
</button>

<style>
  .login-button {
    width: 200px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .google-logo {
    width: 30px;
  }
</style>
