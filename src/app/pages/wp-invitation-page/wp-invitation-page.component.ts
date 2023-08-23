import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { WpInvitationPageService } from './wp-invitation-page.service';
import { authResponse, userDetails } from 'src/app/config/config.types';
import { addUserDetails } from 'src/app/shared/ngRx/userDetails.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-wp-invitation-page',
  templateUrl: './wp-invitation-page.component.html',
  styleUrls: ['./wp-invitation-page.component.css']
})
export class WpInvitationPageComponent implements OnInit{
  workspaceId:string;
  email:string;
  choice:string;

  constructor(private _activeRoute:ActivatedRoute,
    private _wpInvitationService:WpInvitationPageService,
    private _toastService: ToastService,
    private _router: Router,
    private _store:Store){
      this.workspaceId = this._activeRoute.snapshot.paramMap.get('workspaceId') as string;
      this.email = this._activeRoute.snapshot.paramMap.get('email') as string; 
      this.choice = this._activeRoute.snapshot.paramMap.get('choice') as string;
      console.log(this.workspaceId,this.email,this.choice);
    }
  ngOnInit(): void {
    this.verifyUserDetails()
  }

  verifyUserDetails(){
    //(workspace , email , choice) ~ order of the argument 
    this._wpInvitationService.verifyUser(this.workspaceId,this.email,this.choice).subscribe((response:authResponse)=>{
      this.showMessage();
      const newData:userDetails = {
        _id: response.response._id ,
        email: response.response.email,
        name: response.response.name ,
        accessToken: response.accessToken,
    };
    this._store.dispatch(addUserDetails({ newData }));
    this._router.navigate(['/home']);
    },err =>{
      console.error(err);
      this.showMessage();
      this._router.navigate(['/login']);
      this._toastService.showError(err?.error?.error?.message || 'Something went wrong','Please Register');
    })
  }


showMessage():void{
  if(this.choice === 'accepted'){
    this._toastService.showSuccess("Succesfully Accepted","Accepted");
  }else {
    this._toastService.showError("Succesfully Decliende","Decliened")
  }
}
}
