# leesj-dev’s Blog
## About
이 repo에는 저의 Github 블로그 source가 담겨있습니다. 이 사이트는 Gatsby 기반으로 만들어졌으며, Zero-clause BSD 라이선스인 [zoomkoding/zoomkoding-gastby-blog](https://github.com/zoomkoding/zoomkoding-gatsby-blog)을 fork하여 약간의 변형을 하였습니다.

## What’s New
[기존 블로그 소스](https://github.com/zoomkoding/zoomkoding-gatsby-blog)에서 수정 및 추가한 내용은 다음과 같습니다.
- `gatsby-plugin-google-analytics` (deprecated)를 `gatsby-plugin-gtag`로 변경
- KaTeX 기반 수식 지원
- CNAME 추가, `deploy` 명령어 수정 (`gatsby build && cp CNAME public && gh-pages -d public`)
- GraphQL 명령어 deprecated 문법 수정
- Gatsby 플러그인 버전 업데이트
- 운영체제와 무관하게 Pretendard 웹폰트로 일괄적으로 표시
- 가로 너비 (SCSS의 `content-max-width` variable) 변경
- Google, NAVER SEO (Search Engine Optimization)

## Stories
제 블로그에서 게재하고 있는 시리즈는 다음과 같습니다.
1. Pyeon–Ahn SAT: 학창시절 만들었던 ‘괴랄한’ 자작 문제들과 풀이를 올립니다. 제가 Pyeon 역할로 문제를 만들었고, [Ahn](https://github.com/charles903)이 풀고 검토해 주었습니다. 오류가 있을 수 있으니 피드백은 언제나 환영입니다.
2. Study: 개발 관련이나, 대학교에서 배운 과목 관련, 혹은 수능과 관련해서 올려볼 계획입니다. 게시글 수가 많아지면, 따로 카테고리를 분리할 계획입니다.
3. Projects: 지금까지 Github에서 해온 각종 소소한 프로젝트들에 대해 소개하고 내막을 자세하게 설명합니다.

## License
이 웹사이트에 올라오는 모든 내용에 대한 저작권은 저에게 있으므로, 무단 전재 및 재배포를 금합니다. 다만, 출처를 남기신다면 따로 허락을 맡지 않고도 퍼가실 수 있습니다 :)
