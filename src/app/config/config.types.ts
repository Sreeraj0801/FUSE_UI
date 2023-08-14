
export interface LoginInterface {
  credential: string;
  pword: string;
}
export interface LoginErrorInterface {
  credentialError: string;
  pwordError: string;
}

export interface RegisterDetailInterface {
  name?: string;
  email: string;
  mobile?: string;
  pword?: string;
  confirmPword?: string;
  displayName?: string | null;
}
export interface RegisterDetailErrorInterface {
  nameError: string;
  emailError: string;
  mobileError: string;
  pwordError: string;
  confirmPwordError: string;
}

export interface authResponse {
  accessToken: string;
  response: {
    email: string;
    isActive?: string;
    isVerified?: string;
    name: string;
    workspace?: [];
    _id: string;
    __v: number;
  };
}

export interface LoginDetailsInterface {
  credential:string, 
  pword:string
}
export interface LoginErrorInterface {
  credentialError:string,
  pwordError:string,
}
//Login Response Interface
export interface LoginResInterface {
  accessToken?:string; 
  response:{ 
      email: string;
      isActive?: boolean;
      isVerified?:boolean;
      name:string ;
      mobile?:string;
      workspace?:[];
      __v?:number ;
      _id:string ;
      };
}

export interface ResponseInterface { 
email: string;
isActive?: boolean;
isVerified?:boolean;
name:string ;
mobile?:string;
workspace?:[];
__v?:number ;
_id:string ;
}

export interface userDetails{
  _id:string;
  email:string;
  name:string;
  accessToken:string;
}