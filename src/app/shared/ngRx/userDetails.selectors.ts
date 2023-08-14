import { createSelector, createFeatureSelector } from '@ngrx/store';
import { userDetails } from 'src/app/config/config.types';

export const selectUserDetailsState = createFeatureSelector<userDetails>('userDetails');

export const selectUserDetails = createSelector(
    selectUserDetailsState,
    userDetailsState => userDetailsState
);
