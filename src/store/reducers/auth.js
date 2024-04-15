import   {jwtDecode}   from "jwt-decode";
import { LOGIN } from "../action"

const initialState = {
    data:null
}

export const auth = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            const decoded = jwtDecode(action.payload.data);
            localStorage.setItem("user", decoded);
            return{
                ...action.payload
            };
        default:
            return state;
    }
}
