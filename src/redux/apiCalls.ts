import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from "axios";
// import {publicRequest} from '../requestMethods';

export const login = async (dispatch: any, user: any) => {
    dispatch(loginStart());
    try {
        const response = await axios.post("http://localhost:3000/auth/login", user);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}