## Every (블로그) 프로젝트

### 개발 배경

블로그 사이트를 구현하면서 Nextjs의 서버 컴포넌트에 익숙해져보자.  
게시글을 CRUD하는 기능을 서버 컴포넌트에서 처리해보자.  
next-auth를 통해 인증 기능을 구현해보자.  
react query를 사용해서 무한스크롤도 만들어보자.  
사용자 경험을 위해 layout shift를 방지하고, 로딩 속도가 빠르게 느끼도록 suspence를 활용한 스켈레톤 ui를 적용해보자.  
병렬 렌더링을 적용해서 준비된거 먼저 보여주도록 해보자. (메인페이지의 태그 목록과 게시글 목록)  

## 구현해야 하는 기능

### 사용자 기능

- 이메일 회원가입 : 사용자는 이메일로 회원 가입을 할 수 있다.
- 소셜 회원가입 (미구현) : 사용자는 지메일을 사용해서 회원가입을 할 수 있다. 
- 이메일 사용자 인증 : 사용자는 회원가입 할 때 이메일을 등록하고 등록된 이메일로 받은 인증코드로 이메일 인증을 진행한다.
- 이메일 사용자 비밀번호 변경 : 사용자는 비밀번호를 잃어버렸을 때 이메일로 받은 인증코드로 비밀번호를 변경할 수 있다.
- 로그인 : 사용자는 가입한 정보로 로그인 할 수 있다.
- 계정정보변경 (미구현): 사용자는 자신의 계정 정보를 변경할 수 있다. (아이디 제외)
- 회원 탈퇴 (미구현): 사용자는 서비스 사용을 중지하기 위해 탈퇴를 할 수 있다. 단 탈퇴한 아이디는 30일 동안 재가입이 불가능하다.

### 게시판 기능

- 글 작성 : 사용자는 게시판에 글을 작성할 수 있고, 태그를 설정할 수 있다.
- 글 열람 : 사용자는 작성된 글을 최신 순으로 열람할 수 있고, 태그 별로 분류해서 볼 수 있다.
- 글 수정 : 사용자는 본인이 작성한 글을 수정할 수 있다.
- 글 삭제 : 사용자는 본인이 작성한 글을 삭제할 수 있다.
