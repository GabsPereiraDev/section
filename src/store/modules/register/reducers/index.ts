import { Reducer } from "redux";
import produce from "immer";

import { IUser } from "../dto/user.dto"
import { IUserState } from "../dto/UserState.dto";
import { FIND_REGISTER } from "../enum/actions.enum";
import { findRegister } from "../actions/findRegister.action";



const INITIAL_STATE: IUserState = {
    user: {} as IUser,
}





export const register: Reducer<IUserState> = (
    state = INITIAL_STATE,
    action
) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FIND_REGISTER:
                return {
                    ...state,
                };
        };
    });
};

