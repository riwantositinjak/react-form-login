import React, {useContext} from "react";
import ContextAuth from "../../context/context-authentication";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const authCtx = useContext(ContextAuth)
  return (
    <Card className={classes.home}>
      <h1>Welcome back to this page! </h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
