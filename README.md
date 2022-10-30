# 원티드 프리온보딩 프론트엔드 3팀 - Angular cli github issue crawling
>특정 깃헙 레파지토리([angular-cli](https://github.com/angular/angular-cli))의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축.
>
>프로젝트 기간 : 2022년 10월 26일 ~ 2022년 10월 31일
>
>[배포링크](https://issue365.netlify.app/)

</br>

## 📖 목차

- [실행 방법](#%EF%B8%8F-실행-방법)
- [협업 과정](#-협업-과정)
- [Best Practice 및 채택 근거](#%EF%B8%8F-best-practice-및-채택-근거)
- [팀 코드 컨벤션](#-팀-코드-컨벤션)
- [사용 기술](#-사용-기술)
- [폴더 구조](#폴더-구조)
- [팀원](#-팀원)

</br>

## ⌨️ 실행 방법
 
```
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/angular-cli-github-issue-crawling.git
$ npm install

REACT_APP_API_URL=YOUR_GITHUB_TOKEN	// github 토큰 발급 후 root 경로에 .env 파일 생성

npm start
```

</br>

## 📃 협업 과정

본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension]([https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack))을 활용해서 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백 및 리팩토링 후 `페어 프로그래밍` 방식으로 Best Practice를 채택했습니다.

1. VSC Live Share
    
- 개발 초기에 업무를 최대한 작은 단위로 나눈 뒤 같이 프로그래밍하는 방식의 개발 프로세스를 선택했습니다. 단순 화면 공유 기능을 사용했을 때는 동시에 작업을 하거나 다양한 피드백을 주고 받기 어려웠으나 익스텐션을 사용해서 실시간으로 코드를 작성하고 디버깅할 수 있어서 개발 기간을 단축시켰습니다.

</br>
    
2. husky를 이용해 commit전 lint 자동 검사

</br>

## ☑️ Best Practice 및 채택 근거

1. [Octokit API](https://github.com/octokit/octokit.js/#readme) 기반 비동기 통신
- GitHub REST API를 사용해서 특정 repository에 접근하고자 GitHub CLI, JavaScript, cURL 중 빠른 초기 개발 환경 구축과 간소화된 로직을 근거로 `Octokit API`를 채택했습니다. GitHub Actions와도 사용이 가능해 배포 자동화를 고려했을 때 적합하다고 판단했습니다.

```javascript
// client
import { Octokit } from "octokit";
	{/* ... */}
const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
	{/* ... */}
export const octokitApi = async (page) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "angular",
    repo: "angular-cli",
    state: "open",
    sort: "comments",
    per_page: 10,
    page,
  });
  return res;
};
	{/* ... */}
export const octokitDetailApi = async (id) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
    owner: "angular",
    repo: "angular-cli",
    issue_number: id,
  });
  return res;
};
```

</br>

2. Context API / useReducer 
- 스크롤 이벤트에 발생하는 비동기 요청마다 상태를 업데이트 시켰습니다. 컴포넌트 단에서 여러 상태를 만들기 보다 컨포넌트 간 상태를 공유하고 비동기 요청 형태에 따라 useContext와 userReducer 훅이 적합하다고 의견을 모았습니다. 더 작은 영역에서 확실한 책임을 지도록 커스텀 reducer와 공용 context prodiver 컴포넌트로 로직을 분리해서 관리했습니다.
    
```javascript
// IssueContext
import { createContext, useContext, useReducer } from "react";
import issueReducer from "./useIssueReducer";
	{/* ... */}
export const dispatchContext = createContext("");
export const issuesContext = createContext("");
	{/* ... */}
const state = { issue: null, issueList: [] };
	{/* ... */}
export default function IssuesContextWrapper(props) {
  const [issueData, dispatch] = useReducer(issueReducer, state);
	{/* ... */}
  return (
    <issuesContext.Provider value={issueData}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </issuesContext.Provider>
  );
}
	{/* ... */}
export const useIssueContext = () => {
  const issueState = useContext(issuesContext);
  if (!issueState) {
    throw new Error("Error finding issueContext");
  }
  return issueState;
};
	{/* ... */}
export const useDispatchContext = () => {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error("Error finding dispatchContext");
  }
  return dispatch;
};
```

```javascript
// useIssueReducer
const issueReducer = (state, action) => {
  switch (action.type) {
    case "INIT_ISSUELIST":
      return { ...state.issue, issueList: [...action.initIssue] };
    case "ADD_ISSUELIST":
      return { ...state.issue, issueList: [...state.issueList, ...action.initIssue] };
    case "INIT_ISSUE":
      return { issue: action.initIssue, ...state.issueList };
    default:
      return state;
  }
};

export default issueReducer;
```

</br>

3. Intersection Observer API
- 무한 스크롤을 구현하는 방법에 있어, scroll event의 사용은 debounce나 throttle을 통한 호출 제어가 필요하며, 
높이 값 조사를 위해 offsetTop을 사용할 때는 layout이 매번 새로 그려져 `reflow`가 유발됩니다.
Intersection Observer의 사용을 통해 호출 제어의 필요 없이 
타겟 요소와 상위 요소 상이의 intersection 변화를 비동기적으로 감지해, 클라이언트의 부담을 덜어준다는 의견 공유가 이루어졌습니다.
구현로직을 간소화하고 훅을 통해 독립적인 함수로 분리했습니다.
    
```javascript
// useInfinityScroll
import { useRef } from "react";
	{/* ... */}
const useInfinityScroll = () => {
  const observerRef = useRef();
  const beginObserving = (callback) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 },
    );
    observer.observe(observerRef.current);
  };
  return [observerRef, beginObserving];
};
	{/* ... */}
export default useInfinityScroll;
```

</br>

4. 반응형 디자인
- UI를 데스크톱과 모바일에서 보았을 때 모두 읽기 편하게 구현하기 위해 `media-query`를 사용했습니다. 
스타일의 재사용성을 고려해서 커스텀 css를 컴포넌트 간 공유하게 했습니다.
    
```javascript
// globalStyle.js
import { css } from "@emotion/react";

export const customBodyStyle = css`
	/*     */
  @media screen and (min-width: 480px) {
    width: 28rem;
  }
  @media screen and (min-width: 767px) {
    width: 40rem;
  }
  @media screen and (min-width: 959px) {
    width: 50rem;
  }
`;
```

</br>
    
5. react-markdown / syntax highlighter
- 초기에 remark 라이브러리와 remark-html을 혼합하여 사용하는 방식을 채택했습니다.
사용 과정 중 특정 태그(코드 블록)에서 레이아웃이 의도치 않게 상위 블록을 초과하는 경우가 발생하였고,
마크다운 레이아웃 및 html 태그 편집에 용이한 마크다운 라이브러리를 사용하자는 의견을 모았습니다. 
react-markdown은 html 삽입 시 `dangerouslySetInnerHTML` 에 의존하지 않아, XSS 공격에도 안전하다는 의견을 공유했습니다.

```javascript
// Detail.jsx
import Reactmarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
{/* ... */}
function Detail() {
{/* ... */}
  return (
    <section>
	    <Reactmarkdown
				children={issue?.body}
	      skipHtml={false}
				parserOptions={{ commonmark: true }}
        components={{ code: Component }}
	    />
    </section>
  );
}

const Component = ({ children }) => {
{/* ... */}
  return (
    <SyntaxHighlighter language="javascript" customStyle={customStyle}>
      {children}
    </SyntaxHighlighter>
  );
};
{/* ... */}
export default Detail;
```

</br>

## 🔒 팀 코드 컨벤션

- [ ] git commit message 컨벤션

| 커밋명   | 내용                                        |
| -------- | ------------------------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                |
| fix      | 버그 수정                                   |
| docs     | 제품 코드 수정 없음                         |
| style    | 코드 형식, 정렬, 주석 등의 변경             |
| refactor | 코드 리팩토링                               |
| test     | 테스트 코드 추가                            |
| chore    | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix   | 치명적이거나 급한 버그 수정                 |

- [ ] branch 컨벤션

| 브랜치명 | 내용                         |
| -------- | ---------------------------- |
| develop  | 파일, 폴더, 새로운 기능 추가 |
| fix      | 버그 수정                    |
| docs     | 제품 코드 수정 없음          |
| refactor | 코드 리팩토링                |
| hotfix   | 치명적이거나 급한 버그 수정  |

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/><img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/><img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/><img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/><img alt="React Router Dom" src ="https://img.shields.io/badge/React_Router_DOM-CA4245?&style=flat&logo=ReactRouter&logoColor=white"/>

<img alt="octokit" src ="https://img.shields.io/badge/octokit-071D49?&style=flat&logo=Axios&logoColor=white"/><img alt="emotion" src ="https://img.shields.io/badge/Emotion-512BD4?&style=flat&logoColor=white"/><img alt="react-markdown" src ="https://img.shields.io/badge/react_markdown-9999FF?&style=flat&logoColor=white"/><img alt="react-syntax-highlighter" src ="https://img.shields.io/badge/react_syntax_highlighter-FF3366?&style=flat&logoColor=white"/>

<img alt="Git" src ="https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white"/><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white"/><img alt="Notion" src ="https://img.shields.io/badge/Notion-000000?&style=flat&logo=Notion&logoColor=white"/>

</br>

## 📦 폴더 구조

```jsx
📂 src
├── 📂 api // Github Issue Data api 관리
│   └── 📄 client
├── 📂 component // 공통 컴포넌트 관리
│   ├── 📂 common
│   │   ├── 📄 Icon // props로 이름 전달받아 svg를 꺼내 사용할 수 있게 함
│   │   ├── 📂 icons // svg를 함수형으로 분리하여 관리
│   │   ├── 📄 Header
│   │   └── 📄 PageUpButton // 페이지 최상단으로 가게 해주는 버튼
│   ├── 📄 Advertisement // wanted 광고 배너
│   ├── 📄 List // issue list 하나에 대한 컴포넌트
│   ├── 📄 Loading // 무한 스크롤 로딩 스피너
│   │    
├── 📂 hooks // 로그인과 회원가입 공통처리, 유효한 사용자 인증 등 custom hook 관리
│   └── 📄 useInfinityScroll 
├── 📂 pages // 페이지 관리
│   ├── 📄 Home
│   ├── 📄 Detail
│   └── 📄 Error
├── 📂 shared // global style 적용
│   └── 📄 globalStyle
├── 📂 store // context API 관리
│   └── 📄 IssuesContext
├── 📂 utils // 공통적으로 사용되는 util 함수 관리
│   ├── 📄 cutParams // url parameter 분리
│   ├── 📄 dateConverter // api를 통해 제공받는 timestamp 변경
│   └── 📄 markdownParse // .md확장자 파일 형식 파싱
├── 📄 App
└── 📄 index
```

</br>

## 👨‍👩‍👧‍👦 팀원

|                                           조은지<br/>(팀장)                                           |                                         고영훈<br/>(서기)                                         |                                            김창희<br/>(팀원)                                             |                                           박정민<br/>(팀원)                                           |                                         문지원<br/>(팀원)                                         |                                            이상민<br/>(팀원)                                            |                                             이지원<br/>(팀원)                                             |                                            조수진<br/>(팀원)                                            |
| :--------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="60" height="60"> |
|                                [Joeunji0119](https://github.com/Joeunji0119)                                |                            [YeonghunKO](https://github.com/YeonghunKO)                            |                               [PiperChang](https://github.com/PiperChang)                                |                                [ono212](https://github.com/ono212)                                |                               [moonkorea00](https://github.com/moonkorea00)                               |                                 [dltkdals224](https://github.com/dltkdals224)                                 |                                 [365support](https://github.com/365support)                                 |                                   [suzz-in](https://github.com/suzz-in)                                   |

