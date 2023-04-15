import React from 'react';
import Card from './card.js';

function validateEmail(emailStr) {
  const regex = /\w+@\w+\.\w+/g;
  let result = false;
  if (!regex.test(emailStr)) {
    console.log("email is invalid");
    result = false;
  }
  else {
    console.log("email is valid");
    result = true;
  }
  return result;
}

function testEmailInputIncomplete(emailStr) {
  const regex = /\w+@\b/g;
  let result = false;
  if (!regex.test(emailStr)) {
    console.log("email is invalid");
    result = false;
  }
  else {
    console.log("email is valid");
    result = true;
  }
  return result;
}
function onPasswordChanged(e) {
  //validate password satisfies the requirement

}

function getEmailValidMsgColor() {
  return "green";
}

function getEmailInvalidMsgColor() {
  return "red";
}

export default function CreateAccount() {
  // there will be two sub pages
  // one sub page is to enter the fields of personal information to create account
  // the second page is to show a message the account is successfully created
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showEmailHelperMsg, setShowEmailHelperMsg] = React.useState(false);
  // email state
  const [emailHelperMsg, setEmailHelperMsg] = React.useState("");
  const [isEmailInput, setIsEmailInput] = React.useState(false);
  const [emailHelperMsgClassName, setEmailHelperMsgClassName] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  function onEmailChanged(e) {
    // when email input complete, it fires this method, validate and setEmail
    setIsEmailInput(true);

    console.log("email input is changed")
    setShowEmailHelperMsg(true);
    setEmailHelperMsg("...");


  }

  function onEmailGotFocus(e) {
    console.log("on email got focus");

  }

  function onEmailLostFocus(e) {
    console.log("on email lost focus");
    // check if valid
    const val = e.currentTarget.value;
    if (!validateEmail(val)) {
      setShowEmailHelperMsg(true);
      setEmailHelperMsg("invalid email");
      setEmailHelperMsgClassName(getEmailHelperMsgClass(false));
    }
    else {
      setShowEmailHelperMsg(true);
      setEmailHelperMsg("email is valid");
      setEmailHelperMsgClassName(getEmailHelperMsgClass(true));

    }

  }

  function getEmailHelperMsgClass(isEmailValid) {
    const base = "emailHelperMsg";
    return isEmailValid ? base + "-" + getEmailValidMsgColor() : base + "-" + getEmailInvalidMsgColor();
  }

  function getForm({ name, email, password }) {
    const labelItemClassName = "input-group mb-3";
    return (
      <>
        <div>
          <div className="labelItemClassName">
            <label className="col-sm-4 col-xl-2 col-form-label" >Name</label>
            <div className="col-sm-8">
              <input type="text"
                className="form-control"
                onChange={e => setName(e.currentTarget.value)}></input>
            </div>
          </div>
          <div className="labelItemClassName">
            <label className="col-sm-3 col-form-label" >Email</label>
            <div className="col-sm-9">
              <div>
                <input type="text"
                  className="form-control"
                  onChange={onEmailChanged}
                  onFocus={onEmailGotFocus}
                  onBlur={onEmailLostFocus}
                ></input>
                {showEmailHelperMsg && <p className={emailHelperMsgClassName}>{emailHelperMsg}</p>}
              </div>
            </div>
          </div>
          <div className="labelItemClassName">
            <label className="col-sm-3 col-form-label" >Password</label>
            <div className="col-sm-9">
              <input type="password" className="form-control"
                onChange={onPasswordChanged}></input>
            </div>
          </div>
          <button type="submit" className="input-group-text"></button>

        </div>
      </>
    )
  }

  function handleCreate() {

  }

  function displaySuccessMsg() {
    return (
      <p>Success in creating account</p>
    )
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div>
        <Card
          bgcolor='primary'
          txtcolor='black'
          title="Create Account"
          body={
            show ? getForm({ name, email, password }) : displaySuccessMsg()
          }
          status={show}
        ></Card>
        <h5>Success</h5>
        <div className="input-group mb-3">
          <button type="submit" className="input-group-text"></button>
        </div>

      </div>

    </>
  );
}

