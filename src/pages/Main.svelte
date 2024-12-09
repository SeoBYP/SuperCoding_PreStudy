<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from 'firebase/database';

  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  $: items = [];

  const db = getDatabase();
  const itemsRef = ref(db, 'items/');
  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  });

  const calTime = (timestamp) => {
    const now = Date.now(); // 현재 시간 (밀리초)
    const diff = now - timestamp; // 시간 차이 (밀리초)

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // 조건에 따른 결과 반환
    if (days > 0) return `${days}일 전`;
    else if (hours > 0) return `${hours}시간 전`;
    else if (minutes > 0) return `${minutes}분 전`;
    else if (seconds > 0) return `${seconds}초 전`;
    else return '방금 전';
  };
</script>

<!--/*---------- Header Start ----------*/-->
<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery-50.svg" alt="battery-50" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼 1동</div>
      <div class="menu-bar__location--icon">
        <img src="assets/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="search" />
      <img src="assets/menu.svg" alt="menu" />
      <img src="assets/bell.svg" alt="bell" />
    </div>
  </div>
</header>
<!--/*---------- Header End ----------*/-->
<!--/*---------- Main Start ----------*/-->
<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img">
        <img src={item.imageURL} alt={item.title} />
      </div>
      <div class="item-list__info">
        <div class="item-list__info--title">{item.title}</div>
        <div class="item-list__info--meta">
          {item.place}
          {calTime(item.insertAr)}
        </div>
        <div class="item-list__info--price">{item.price}</div>
        <div class="item-list__info">{item.description}</div>
      </div>
    </div>
  {/each}
  <a class="write-btn" href="/#/write">+ 글쓰기</a>
</main>
<!--/*---------- Main End ----------*/-->

<Footer location="home" />

<div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

<style>
</style>
