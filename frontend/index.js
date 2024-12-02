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

const renderData = async (data) => {
  const main = document.querySelector('main');
  data.reverse().forEach(async (obj) => {
    const div = document.createElement('div');
    div.className = 'item-list';

    const ImgDiv = document.createElement('div');
    ImgDiv.className = 'item-list__img';

    const img = document.createElement('img');
    const res = await fetch(`/items/${obj.id}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    img.src = url;

    const InfoDiv = document.createElement('div');
    InfoDiv.className = 'item-list__info';

    const InfoTitleDiv = document.createElement('div');
    InfoTitleDiv.className = 'item-list__info--title';
    InfoTitleDiv.innerText = obj.title;

    const InfoMetaDiv = document.createElement('div');
    InfoMetaDiv.className = 'item-list__info--meta';
    InfoMetaDiv.innerText = obj.place + ' ' + calTime(obj.insertAt);

    const InfoPriceDiv = document.createElement('div');
    InfoPriceDiv.className = 'item-list__info--price';
    InfoPriceDiv.innerText = obj.price;

    ImgDiv.appendChild(img);

    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);

    div.appendChild(ImgDiv);
    div.appendChild(InfoDiv);

    main.appendChild(div);
  });
};

const fetchList = async () => {
  const accessToken = window.localStorage.getItem('token');
  const res = await fetch('/items', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (res.status == 200) {
    const data = await res.json();
    renderData(data);
  } else {
    alert('로그인이 필요합니다.');
    window.location.pathname = '/login.html';
    return;
  }
};

fetchList();
