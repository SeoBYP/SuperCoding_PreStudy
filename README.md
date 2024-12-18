# 슈퍼코딩 사전 주차 강의 내용 정리입니다.

## 1, HTML 기본 구조 및 설명

---

### HTML 기본 구조

HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 각 태그는 특정한 기능이나 스타일을 적용하는데 사용됩니다. 이 문서에서는 기본적인 HTML 태그와 그 역할에 대해 정리해 보겠습니다.

```html
<!DOCTYPE html>
<html>
<head>
    <title>페이지 제목</title>
</head>
<body>
    <!-- 여기에 페이지의 내용이 들어갑니다 -->
</body>
</html>
```

- `<!DOCTYPE html>`: HTML5 문서임을 선언하는 부분으로, 브라우저가 HTML 문서를 제대로 해석하도록 도와줍니다.
- `<html>`: HTML 문서의 루트 요소로, 모든 콘텐츠를 감쌉니다.
- `<head>`: 문서의 메타데이터(제목, 스타일, 외부 리소스)를 포함하는 부분입니다.
- `<title>`: 브라우저 탭에 표시될 페이지 제목을 정의합니다.
- `<body>`: 실제 사용자에게 표시될 콘텐츠가 포함되는 부분입니다.

---

### 텍스트 및 서식 관련 태그

HTML에서는 다양한 텍스트 서식 태그를 제공하여 문서의 구조와 스타일을 설정할 수 있습니다.

- `<h1>` ~ `<h6>`: 제목 태그로, `<h1>`은 가장 크고 `<h6>`은 가장 작은 제목을 나타냅니다.
- `<p>`: 단락을 나타내며, 주로 문단 구성을 위해 사용됩니다.
- `<b>`: 굵게 표시하고 싶을 때 사용합니다.
- `<i>`: 이탤릭체(기울임)를 나타냅니다.
- `<u>`: 밑줄을 추가할 때 사용됩니다.
- `<strong>`: 의미적 강조를 위해 굵은 텍스트로 표시됩니다.
- `<em>`: 의미적 강조를 나타내며, 이탤릭체로 표시됩니다.

---

### 링크 및 이미지 태그

웹 페이지에서 다른 페이지로 이동하거나 이미지를 삽입할 때 사용하는 태그입니다.

- `<a href="URL">`: 하이퍼링크를 정의합니다. `href` 속성에 연결할 URL을 입력합니다.
- `<img src="URL" alt="이미지 설명">`: 이미지를 삽입할 때 사용합니다. `src` 속성에 이미지 경로를, `alt` 속성에 이미지 설명을 입력합니다.

---

### 리스트 태그

목록을 만들 때 사용하는 태그입니다.

- `<ul>`: 순서 없는 목록을 정의하며, 각 항목 앞에 기본 점이 표시됩니다.
- `<ol>`: 순서 있는 목록을 정의하며, 각 항목 앞에 숫자가 표시됩니다.
- `<li>`: 목록 항목을 나타내며, `<ul>` 또는 `<ol>` 내부에 포함됩니다.

---

### 테이블 태그

데이터를 표 형태로 정리할 때 사용합니다.

- `<table>`: 테이블을 정의합니다.
- `<tr>`: 테이블의 행을 정의합니다.
- `<td>`: 테이블의 각 셀 데이터를 정의합니다.
- `<th>`: 테이블의 헤더 셀을 정의하며, 기본적으로 굵게 표시됩니다.

---

### 폼 태그

사용자 입력을 받을 때 사용하는 태그입니다.

- `<form action="URL" method="POST|GET">`: 사용자 입력을 서버로 전송하기 위해 폼을 정의합니다.
- `<input>`: 사용자 입력 필드를 정의합니다.
    - `type="text"`: 텍스트 입력 필드
    - `type="password"`: 비밀번호 입력 필드
    - `type="radio"`: 라디오 버튼
    - `type="checkbox"`: 체크박스
    - `type="submit"`: 제출 버튼
- `<textarea>`: 여러 줄 텍스트 입력 필드를 정의합니다.
- `<select>`: 드롭다운 목록을 정의합니다.
- `<option>`: 드롭다운 목록에서 선택 항목을 정의합니다.

---

### 섹션 태그

문서를 논리적으로 나누어 구조화할 때 사용합니다.

- `<header>`: 문서의 머리글 부분을 나타냅니다.
- `<footer>`: 문서의 바닥글 부분을 나타냅니다.
- `<section>`: 문서의 일반적인 구획을 정의합니다.
- `<article>`: 독립적인 콘텐츠 블록을 나타냅니다.
- `<nav>`: 네비게이션 링크 모음을 나타냅니다.
- `<aside>`: 보조 콘텐츠 영역을 나타내며, 사이드바 등으로 사용됩니다.
- `<main>`: 문서의 주요 콘텐츠를 나타냅니다.

---

### 미디어 태그

오디오나 비디오와 같은 미디어 콘텐츠를 삽입할 때 사용하는 태그입니다.

- `<audio controls>`: 오디오 파일을 삽입합니다. `controls` 속성으로 재생 버튼을 표시할 수 있습니다.
- `<video controls>`: 비디오 파일을 삽입합니다. `controls` 속성으로 재생 버튼을 표시할 수 있습니다.
- `<source src="URL" type="미디어 타입">`: 오디오나 비디오의 소스를 정의합니다.

---

### 기타 태그

웹 페이지 레이아웃과 스타일을 위해 사용하는 기타 태그들입니다.

- `<div>`: 블록 레벨 컨테이너로, 스타일 및 레이아웃에 주로 사용됩니다.
- `<span>`: 인라인 컨테이너로, 텍스트 내 특정 부분을 스타일링하는 데 사용됩니다.
- `<iframe src="URL">`: 다른 HTML 페이지를 삽입할 때 사용합니다.
- `<script>`: JavaScript 코드를 포함하거나 외부 스크립트를 삽입합니다.
- `<style>`: 문서 내에 CSS 스타일을 포함합니다.
- `<link rel="stylesheet" href="URL">`: 외부 스타일시트를 연결합니다.

---

위 내용을 기반으로 HTML 태그들을 사용할 수 있으며, 각 태그의 용도에 맞게 웹 페이지를 구조화할 수 있습니다.



## CSS 요소 및 설명

---

### CSS 기본 구조

CSS는 HTML 요소의 스타일을 지정하는 데 사용되며, HTML 문서의 모양과 레이아웃을 조정합니다. CSS는 HTML 파일 내의 `<style>` 태그 또는 외부 스타일시트 파일(`.css`)에 정의할 수 있습니다.

```css
/* 기본 CSS 구조 */
selector {
    property: value;
}
```

- **selector**: 스타일을 적용할 HTML 요소를 지정합니다.
- **property**: 스타일 속성을 나타냅니다 (예: 색상, 크기).
- **value**: 속성의 값을 설정합니다.

---

### CSS 선택자

- `*`: 모든 요소를 선택합니다.
- `tag`: 특정 태그 요소를 선택합니다 (예: `p`는 모든 `<p>` 태그).
- `.class`: 특정 클래스의 요소를 선택합니다.
- `#id`: 특정 ID의 요소를 선택합니다.
- `element, element`: 여러 요소를 선택합니다.
- `element element`: 하위 요소 선택자
- `element > element`: 자식 요소 선택자

---

### CSS 속성

1. **텍스트 및 글꼴 스타일**
  - `color`: 텍스트 색상
  - `font-size`: 글꼴 크기
  - `font-family`: 글꼴 종류
  - `font-weight`: 글꼴 두께
  - `text-align`: 텍스트 정렬 (왼쪽, 가운데, 오른쪽)
  - `text-decoration`: 텍스트에 밑줄, 취소선 등을 추가

2. **배경**
  - `background-color`: 배경 색상
  - `background-image`: 배경 이미지
  - `background-size`: 배경 이미지 크기
  - `background-repeat`: 배경 이미지 반복 설정

3. **레이아웃**
  - `width`: 요소 너비
  - `height`: 요소 높이
  - `margin`: 요소 바깥 여백
  - `padding`: 요소 안쪽 여백
  - `border`: 요소의 테두리 스타일
  - `display`: 요소의 디스플레이 유형 (예: `block`, `inline`, `flex` 등)

4. **정렬 및 배치**
  - `position`: 요소 위치 설정 (`static`, `relative`, `absolute`, `fixed`, `sticky`)
  - `top`, `bottom`, `left`, `right`: 위치 조정
  - `z-index`: 요소의 쌓임 순서

5. **CSS Flexbox**
  - `display: flex`: Flexbox 컨테이너 설정
  - `justify-content`: 주 축 정렬 (가로축 정렬)
  - `align-items`: 교차 축 정렬 (세로축 정렬)
  - `flex-direction`: 주 축 방향 설정

6. **그리드**
  - `display: grid`: Grid 레이아웃 설정
  - `grid-template-columns`: 열 구성
  - `grid-template-rows`: 행 구성
  - `gap`: 그리드 요소 간격

---

### 반응형 디자인

- `@media`: 미디어 쿼리를 사용하여 화면 크기와 장치에 따라 스타일을 조정합니다.

```css
@media (max-width: 600px) {
    body {
        font-size: 14px;
    }
}
```

---

이 내용을 기반으로 CSS를 통해 HTML 요소에 스타일을 적용하고, 웹 페이지의 디자인을 더 효율적으로 관리할 수 있습니다.



## CSS 프레임워크: Bootstrap & Tailwind CSS

### 1. Bootstrap

Bootstrap은 가장 널리 사용되는 CSS 프레임워크 중 하나로, 기본적인 레이아웃, 스타일, 구성 요소를 빠르게 개발할 수 있도록 돕습니다. 반응형 웹 디자인을 지원하며, CSS와 JavaScript 기반의 다양한 UI 컴포넌트를 제공합니다.

#### 특징
- **미리 설계된 구성 요소**: 버튼, 카드, 모달, 네비게이션 바 등 여러 UI 컴포넌트를 제공하여 빠르게 디자인을 구현할 수 있습니다.
- **반응형 그리드 시스템**: 반응형 레이아웃을 쉽게 구성할 수 있는 12열 그리드 시스템을 제공합니다.
- **커스터마이징 가능**: 기본 테마를 제공하지만, SCSS 변수를 통해 테마와 색상을 커스터마이징할 수 있습니다.
- **JavaScript 플러그인 지원**: JavaScript와 연동하여 모달, 드롭다운, 툴팁, 알림창 등 다양한 상호작용 기능을 제공합니다.

#### 기본 사용법
Bootstrap은 CDN 또는 설치를 통해 사용할 수 있습니다.

##### CDN 사용
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

##### 설치
```bash
npm install bootstrap
```

##### 예제
```html
<div class="container">
    <div class="row">
        <div class="col">
            Column 1
        </div>
        <div class="col">
            Column 2
        </div>
    </div>
</div>
```

---

### 2. Tailwind CSS

Tailwind CSS는 유틸리티 클래스 기반의 CSS 프레임워크로, HTML 요소에 직접 클래스명을 적용해 스타일을 정의합니다. 스타일링을 커스터마이징하고자 하는 개발자에게 적합하며, CSS를 작성하는 대신 유틸리티 클래스만으로 구성할 수 있습니다.

#### 특징
- **유틸리티 클래스**: `text-center`, `bg-blue-500`, `p-4` 등의 유틸리티 클래스가 있어, HTML 클래스만으로 스타일을 정의할 수 있습니다.
- **높은 커스터마이징 가능성**: 유틸리티 클래스와 Tailwind의 설정 파일을 통해 맞춤형 디자인을 빠르게 구현할 수 있습니다.
- **반응형 디자인**: `sm:`, `md:`, `lg:`, `xl:` 등의 접두사를 통해 화면 크기에 따른 반응형 디자인을 지원합니다.
- **개발 속도 향상**: 코드 내에서 바로 스타일을 설정하여 CSS 파일 관리가 간편하고 빠릅니다.

#### 기본 사용법
Tailwind CSS는 CDN으로도 사용할 수 있지만, 일반적으로 프로젝트에 설치하여 사용합니다.

##### 설치
```bash
npm install tailwindcss
npx tailwindcss init
```

##### Tailwind 설정 파일 (tailwind.config.js)
Tailwind의 설정 파일에서 색상, 크기, 여백 등을 커스터마이징할 수 있습니다.

```js
module.exports = {
    theme: {
        extend: {
            colors: {
                customBlue: '#1DA1F2',
            },
        },
    },
}
```

##### 예제
```html
<div class="container mx-auto p-4">
    <div class="grid grid-cols-2 gap-4">
        <div class="p-4 bg-blue-500 text-white">Column 1</div>
        <div class="p-4 bg-green-500 text-white">Column 2</div>
    </div>
</div>
```

---

### 비교

| 특징                    | Bootstrap                                      | Tailwind CSS                                |
|-------------------------|-----------------------------------------------|---------------------------------------------|
| 스타일링 방식           | 미리 설계된 컴포넌트 및 클래스 활용               | 유틸리티 클래스 직접 적용                  |
| 커스터마이징            | SCSS 변수, 사용자 정의 스타일 가능                | Tailwind 설정 파일에서 커스터마이징         |
| 반응형 디자인           | 그리드 및 반응형 클래스                         | `sm:`, `md:`, `lg:` 접두사                 |
| 학습 곡선               | 상대적으로 쉬움                                 | 유틸리티 클래스를 이해하는 데 시간 필요       |
| JavaScript 구성 요소    | 모달, 드롭다운, 툴팁 등                        | 별도의 JavaScript 구성 요소 없음            |

두 프레임워크는 각기 다른 스타일링 접근 방식을 제공합니다. Bootstrap은 미리 설계된 컴포넌트를 빠르게 사용할 수 있으며, Tailwind CSS는 유틸리티 클래스 기반으로 고도의 커스터마이징을 원하는 프로젝트에 적합합니다.
