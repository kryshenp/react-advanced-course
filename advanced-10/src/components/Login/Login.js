import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // <--- both logics from email and password can be included into useEffedt
    const indentifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
    }, 500);

    return () => {
      clearTimeout(indentifier);
      console.log("Cleanup"); // this doesn't run before the very first side effect execution
    }; // so-called cleanup function
  }, [enteredEmail, enteredPassword]);
  // }, [setFormIsValid, enteredEmail, enteredPassword]); // adding a pointer to setFormIsValid so I essentially adding a f-n itself
  // this tells React tha after every Login component f-n execution it will rerun this useEffect function but only
  // if EITHER setFormIsValid OR enteredEmail OR enteredPassword changed in the last componennt rerender cycle

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setFormIsValid(event.target.value.includes("@") && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes("@"));
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
