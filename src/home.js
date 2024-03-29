import React from 'react';
import { UserContext } from './context.js';
import Card from './card.js';
import Login from './login.js';
import AccountBalance from './accountBalance.js';

function showLogin() {
  // show login page
  return (
    <>
      <Login />
    </>
  )
}

function showAccountBalance() {
  // show account balance page 
  return (
    <>
      <AccountBalance />
    </>
  );
}

export default function Home() {
  const ctx = React.useContext(UserContext);
  const [isAlreadyLogin, setIsAlreadyLogin] = React.useState(false);

  return (
    <>
      <div style={{ display: "block" }}>
        <Card title="Welcome to Union Bank"
          bgcolor="primary"
          body={
            !isAlreadyLogin ? (showLogin()) : (showAccountBalance())
          }
        ></Card>
      </div>
    </>
  );
}
