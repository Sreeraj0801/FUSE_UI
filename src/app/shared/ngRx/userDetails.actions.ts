import {createAction,props} from '@ngrx/store';
import { userDetails } from 'src/app/config/config.types';

export const addUserDetails    = createAction('[userDetails] AddUserDetails',props<{newData:userDetails}>());
export const removeUserDetails = createAction('[userDetails] RemoveUserDetails'); 
