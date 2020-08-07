import React from "react";
import SignInComponent from "../components/signin/signin";
import {Container} from "@material-ui/core"

const SignPage = (props) => (
  <div>
    <SignInComponent />
    <Container>
    Demo account: admin@scarletmail.rutgers.edu
    Password: test123
    
    </Container>
    
  </div>
);

export default SignPage;
