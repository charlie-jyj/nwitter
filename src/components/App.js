import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

// router  역할을 하면서 코드 가독성을 위해 상태는 App 에서 관리
function App() {
  // [상태, 상태 관리 함수] js destructuring assignment
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {

		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(user);
      } else {
				setIsLoggedIn(false);
      }

      setInit(true);
    });

		
  },[]);
 
  return (
		<>
    	{init? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing"}
      <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
    </>

  );
}

export default App;
