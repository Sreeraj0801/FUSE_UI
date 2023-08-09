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