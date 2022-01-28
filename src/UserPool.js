import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"ap-south-1_bNIJIEDEr",
    ClientId:"4ngstasrb6lvosufg7kudtsfhb"
}

export default new CognitoUserPool(poolData);