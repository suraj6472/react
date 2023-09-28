import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

const Home = () => {
  const authCTX = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCTX.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
