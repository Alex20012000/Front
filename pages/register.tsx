import { useState } from "react";
import Layout from "@/components/Layout/layout";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/pages/_app";
import {
  setLogin,
  setPass,
  setToken,
  setName,
  setAbout,
} from "@/pages/store/slices";
import { URL } from "@/const";

export default function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [message, setMessage] = useState("");
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    let _url = String(URL);
    _url = _url.concat(_url[_url.length - 1] === "/" ? "" : "/");

    const res = await fetch(_url + "api/v1/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: emailValue,
        pass: passwordValue,
        name: nameValue,
        about: descriptionValue,
      }),
    });

    if (res.status !== 200) {
      // Handle error status
    } else {
      const receivedData = await res.json();
      if (!receivedData.error) {
        if (receivedData.message === "Успешно!") {
          setMessage(receivedData.message);
          dispatch(setLogin(emailValue));
          dispatch(setToken(receivedData.token));
          dispatch(setPass(passwordValue));
          dispatch(setName(nameValue));
          dispatch(setAbout(descriptionValue));
          push(`/catalog`);
        } else setMessage(receivedData.message);
      } else {
        // Handle error message
      }
    }
  };

  return (
    <Layout>
      <form className="form_login">
        {message !== "Успешно!" && <div className="message">{message}</div>}
        <label className="form_label">
          login(email): &nbsp; &nbsp;
          <input
            id="login"
            className="form_input"
            placeholder="email"
            type="email"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            minLength={4}
            required
          />
        </label>

        <label className="form_label">
          {" "}
          &nbsp;&nbsp;&nbsp; password: &nbsp; &nbsp;
          <input
            id="password"
            className="form_input"
            placeholder="min 8"
            type="password"
            value={passwordValue}
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
            minLength={8}
            required
          />
        </label>

        <label className="form_label">
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name: &nbsp; &nbsp;
          <input
            id="name"
            className="form_input"
            placeholder="name"
            type="text"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
            autoComplete="off"
            required
          />
        </label>

        <label className="form_label form_label_description">
          &nbsp; &nbsp;&nbsp;About me: &nbsp; &nbsp;
          <textarea
            id="description"
            className="form_textarea"
            placeholder="about"
            value={descriptionValue}
            onChange={(e) => {
              setDescriptionValue(e.target.value);
            }}
          ></textarea>
        </label>

        <div className="form_login_button_container">
          <button type="button" onClick={(e) => handleClick(e)}>
            Register!
          </button>
        </div>
      </form>
    </Layout>
  );
}
