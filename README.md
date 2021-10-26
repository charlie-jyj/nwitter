# Nwitter

>  Twitter (mini) clone with React and Firebase



## Timeline Log

- 2021-10-25
  - 개발 환경 세팅
    - npm
      - npx : 1회성 사용
    - react
    - firebase
  - .env 추가
  - firebase.js 추가
- 2021-10-26
  - Router  
  - Auth



## A-ha with JS

- .env

```js
apiKey: process.env.REACT_APP_API_KEY
```



- Destructuring Assignment

```react
import {HashRouter as Router, Route, Switch} from "react-router-dom";
```



- named export

```react
export const authService = firebase.auth();
```

default export의 경우 한 파일 당 오직 하나만 존재할 수 있는 것과 대조된다.

```js
// 참고 : Dynamic import 

function doMath() {
    import("./math")
    .then(math => math.plus(2,2));
}

// async + await

async function doMath() {
    const math = await import("./math");
    math.plus(2,2);
}

btn.addEventListener("click", doMath);
```



## problem

- import firebase from "firebase/app"
  - firebase 9 + needs compat keyword

```react
import firebase from 'firebase/compat/app';
```



- firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth is not a function
  - ??? 
  - 추측하건데 auth import 가 제대로 안 되는거 같은데 왜인지는 아직 모르겠다.