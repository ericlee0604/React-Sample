import axios from "axios";
export const LOGIN = "LOGIN";

export const login = (data) => ({
    type:LOGIN,
    payload:data
})