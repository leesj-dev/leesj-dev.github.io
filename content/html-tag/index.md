---
emoji: 📖
title: HTML 태그 정리
date: '2023-01-08 14:31:00'
author: 이승준
tags: HTML
categories: 공부
---

# Text
## 1. Document Type Definition
문서 형식을 정의하는 태그로, 출력할 웹 페이지의 형식을 브라우저에 전달한다.문서의 최상단에 위치해야 하며, HTML5는 아래를 사용한다.
```html
<!DOCTYPE html>
```

## 2. html
모든 HTML 요소의 부모 요소이다. (`<!DOCTYPE>` 제외)
한국어를 사용할 때 `lang` attribute을 사용한다.
```html
<!DOCTYPE html>
<html lang="ko">
  <head></head>
  <body></body>
</html>
```

## 3. head
metadata를 포함하기 위한 태그.

### 3-1. title
문서의 제목을 정의하며, 이는 브라우저의 탭에 표시된다.
```html
<title>문서 제목</title>
```

### 3-2. style
HTML 문서의 스타일 정보를 정의한다. 주로 이 방식 대신 외부 CSS 파일을 불러온다.
```html
<style>
    body {
        background-color: yellow;
        color: blue;
    }
</style>
```

### 3-3. link
외부 리소스와의 연계 정보를 정의한다. 외부 CSS 파일을 불러올 때 사용한다.
```html
<link rel="stylesheet" href="style.css">
```

### 3-4. script
client-side JavaScript를 정의한다.
```html
<script>
    document.addEventListener('click', function () {
        alert('Clicked!');
    });
</script>
```

`src` attribute를 사용하여 외부 JavaScript 파일을 불러올 때도 사용한다.
```html
<script src="main.js"></script>
```

### 3-5. meta
메타데이터의 정의에 사용된다.
* `charset` attribute: 브라우저가 사용할 문자셋을 정의한다.
```html
<meta charset="utf-8">
```

## 4. body
문서의 내용.

* headings: `h1` 

```toc
```