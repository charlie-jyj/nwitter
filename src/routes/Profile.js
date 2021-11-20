import { authService } from "fbase";
import { useHistory } from "react-router";

// 브라우저는 사용자의 주소 이동 발자취를 history 에 저장한다.

const Profile = () => {
  const history = useHistory();
  const onLogoutClick = () => {
    authService.signOut();

    // path '/' 으로 이동
    history.push("/");
  };

  return (
    <>
      <button onClick={onLogoutClick}>Log Out</button>
    </>
  )
};

export default Profile;