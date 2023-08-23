import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { getuserDetails } from 'src/app/config/config.function';
import { userDetails } from 'src/app/config/config.types';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  storeSubscription: Subscription;
  userAccessToken: string = '';
  constructor(
    private router: Router,
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userDetails: userDetails = getuserDetails();
      if (userDetails?.accessToken?.length > 0) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}