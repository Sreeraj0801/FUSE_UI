import { createReducer, on } from '@ngrx/store';
import { addUserDetails, removeUserDetails, updateUserDetails} from './userDetails.actions';
import { userDetailsState } from './userDetails.states';
import { localStorageSync } from 'ngrx-store-localstorage';
import { userDetails } from 'src/app/config/config.types';

export const userDetailsReducer = createReducer(
  userDetailsState,
  on(addUserDetails, (state, { newData }) => {
    return newData;
  }),
  on(updateUserDetails,(state , {newData}) => {
    return {
        _id: newData._id || state._id,
        accessToken:newData.accessToken || state.accessToken,
        email:newData.email ||state.email,
        name:newData.name || state.name
    }
  }),
  on(removeUserDetails, (state) => {
    return {
      _id: '',
      accessToken: '',
      email: '',
      name: '',
    };
  })
);

export function localStorageSyncReducer(reducer: any): (state: any, action: any) => any {
  return localStorageSync({
    keys: ['userDetails'],
    rehydrate: true,
  })(reducer);
}

// Wrap your reducer with the local storage meta-reducer
export function _userDetailsReducer(
    state: userDetails | undefined,
    action: any
  ): userDetails {
    return localStorageSyncReducer(userDetailsReducer)(state, action);
  }
