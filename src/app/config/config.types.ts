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

//Login Response Interface
export interface LoginResInterface {
  accessToken?: string;
  response: {
    email: string;
    isActive?: boolean;
    isVerified?: boolean;
    name: string;
    mobile?: string;
    workspace?: [];
    __v?: number;
    _id: string;
  };
}

export interface ResponseInterface {
  email: string;
  isActive?: boolean;
  isVerified?: boolean;
  name: string;
  mobile?: string;
  workspace?: [];
  __v?: number;
  _id: string;
}

export interface userDetails {
  _id: string;
  email: string;
  name: string;
  accessToken: string;
}

export interface CreateProjectForm {
  projectName: string;
  workspaceName: string;
  masterId: string;
  projectDiscription: string;
  projectTheme: string;
  fromDate: string;
  toDate: string;
  members: string | null[];
}

export interface workspaceRequest {
  color: string;
  workspaceName: string;
  masterId: string;
}

export interface WorkspaceInterface {
  color: string;
  masterId: string;
  workspaceName: string;
  members: [];
  projects: [];
  __v: number;
  _id: string;
}

export interface WorkspceMembers {
  email: string;
  status: string;
}

export interface workspaceResponse {
  ownedWorkspaces: WorkspaceInterface[];
  sharedWorkspaces: WorkspaceInterface[];
}

export interface RadioCardComponentEMitter{
  id:string,
  name:string,
  owner:boolean
}

export interface ProjectData {
  fromDate: string;
  masterId: string;
  members: string[];
  pending: boolean;
  projectDescription: string;
  projectName: string;
  projectTheme: string;
  status: boolean;
  toDate: string;
  workspaceName: string;
  __v: number;
  _id: string;
}
