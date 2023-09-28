import React, { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

// In the previous lecture, we used object destructuring to add object properties as dependencies to useEffect().

// const { someProperty } = someObject;
// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someProperty]);
// This is a very common pattern and approach, which is why I typically use it
//and why I show it here (I will keep on using it throughout the course).

// I just want to point out, that they key thing is NOT that we use destructuring but
//that we pass specific properties instead of the entire object as a dependency.

// We could also write this code and it would work in the same way.

// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject.someProperty]);
// This works just fine as well!

// But you should avoid this code:

// useEffect(() => {
//   // code that only uses someProperty ...
// }, [someObject]);
// Why?

// Because now the effect function would re-run whenever ANY property of someObject changes
//- not just the one property (someProperty in the above example) our effect might depend on.

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "BLUR_INPUT") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "BLUR_INPUT") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  const authCTX = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState; // this 'emailIsValid' is an alias for this isValid variable. this a syntax for destructring

  const { isValid: passwordIsValid } = passwordState;

  // previously the handler functions donot grantee that the other parameter state is latest one.
  // in this senerio, useeffect is useful as React grantees that it received the latest state for execution
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("validating");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "BLUR_INPUT" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "BLUR_INPUT" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCTX.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
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
