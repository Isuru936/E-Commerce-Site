import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const [close, setClose] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {!close &&
        (isLogin ? (
          <Login setClose={setClose} setIsLogin={setIsLogin} />
        ) : (
          <Register setClose={setClose} setIsLogin={setIsLogin} />
        ))}
    </div>
  );
};

export default Auth;
