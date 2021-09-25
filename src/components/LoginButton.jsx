import { withRouter } from "react-router-dom";

export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      //페이지 이동
      props.history.push("/");
    }, 1000);
  }
  return (
    <div>
      <button onClick={login}>로그인 하기</button>
    </div>
  );
});
