//Quick fix
import React from "react";

import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => {
    return <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
}

export default SignUpPage
