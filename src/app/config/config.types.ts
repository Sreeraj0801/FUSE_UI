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
