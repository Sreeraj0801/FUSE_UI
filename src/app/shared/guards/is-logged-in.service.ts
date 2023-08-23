import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { userDetails } from 'src/app/config/config.types';
import { getuserDetails } from 'src/app/config/config.function';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInService implements CanActivate {
  storeSubscription: Subscription;
  userAccessToken: string = '';
  constructor(
    private router: Router) {}

  Routes:string[] = ['/login','/signup','/swarm']

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userDetails: userDetails = getuserDetails();
    if (!(userDetails?.accessToken?.length !> 0) || userDetails?.accessToken === undefined) {
      return true;
    } else {
      this.router.navigate(['/home'])
      return false;
    }
  }
}