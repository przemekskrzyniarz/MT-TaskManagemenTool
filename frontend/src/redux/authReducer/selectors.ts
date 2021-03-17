import { Reducers } from "../typings";

const getToken = (auth: Reducers) => auth.authReducer.token;

export { getToken };