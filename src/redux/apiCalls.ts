import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from "axios";
import {publicRequest} from '../requestMethods';

export const login = async (dispatch: any, user: any) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(response.data));
        console.log(response.data)
    } catch (error) {
        dispatch(loginFailure());
    }
}