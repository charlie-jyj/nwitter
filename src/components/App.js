import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

// router  역할을 하면서 코드 가독성을 위해 상태는 App 에서 관리
function App() {
  // [상태, 상태 관리 함수] js destructuring assignment
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

 return (
   <>
  <AppRouter isLoggedIn={isLoggedIn} />
  <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
 )
}

export default App;
