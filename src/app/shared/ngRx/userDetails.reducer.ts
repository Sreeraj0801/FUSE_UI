import {createReducer,on} from '@ngrx/store';
import {addUserDetails,removeUserDetails} from './userDetails.actions' ;
import { userDetailsState } from './userDetails.states';


export const userDetailsReducer = createReducer(
    userDetailsState,
    on(addUserDetails, (state,{newData}) =>{
        return  newData ;
    } ),
    on(removeUserDetails ,(state) => 
    { 
        state._id  =  '' , 
        state.accessToken = '',
        state.email = '',
        state.name =''
        return state;
    }
        ),
)