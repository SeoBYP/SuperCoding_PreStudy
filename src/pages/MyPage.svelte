<script>
  import Nav from '../components/Footer.svelte';
  import { user$ } from '../Store';
  const logout = () => {
    user$.set(null);
    localStorage.removeItem('token');
    console.log('logout');
  };
</script>

<div>나의 당근</div>
<button on:click={logout}>로그아웃</button>
<Nav location="my" />

<style>
  button {
    cursor: pointer;
    border: 1px solid gray;
  }
</style>
