import React, { DOMAttributes, FC, useState } from "react";
import styled from "./Login.module.scss";
import { useRouter } from "next/router";

interface Props {}

/**
 * Login
 *
 * @param {Props} { }
 */
export const Login: FC<Props> = ({}) => {
  const router = useRouter();
  const [userError, setUserError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [loginError, setLoginError] = useState<string>();
  const handleSubmit: DOMAttributes<HTMLFormElement>["onSubmit"] = (e) => {
    const user = e.currentTarget.user.value;
    const password = e.currentTarget.password.value;
    if ([user, password].includes("")) {
      user === "" && setUserError("ユーザ名を入力してください");
      password === "" && setPasswordError("パスワードを入力してください");
    } else {
      if (user === "user" && password === "password") {
        router.push("/main");
      } else {
        setLoginError("認証に失敗しました");
      }
    }
    e.preventDefault();
  };
  return (
    <div className={styled.root}>
      <form onSubmit={handleSubmit} className={styled.form}>
        <div className={styled.input}>
          <label htmlFor="user" placeholder="ユーザ名">
            ユーザ名
          </label>
          <input type="text" id="user" />
        </div>
        {userError && (
          <div className={styled.error} role="alert">
            {userError}
          </div>
        )}
        <div className={styled.input}>
          <label htmlFor="password" placeholder="パスワード">
            パスワード
          </label>
          <input id="password" type="password" />
        </div>
        {passwordError && (
          <div className={styled.error} role="alert">
            {passwordError}
          </div>
        )}
        <button type="submit">ログイン</button>
        {loginError && (
          <div className={styled.error} role="alert">
            {loginError}
          </div>
        )}
      </form>
    </div>
  );
};
