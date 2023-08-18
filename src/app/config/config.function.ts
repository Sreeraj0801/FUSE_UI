import { userDetails } from "./config.types";

export const getuserDetails =  ():userDetails =>{
    const userDetails: any = localStorage.getItem('userDetails');
    const parsedValue: userDetails = JSON.parse(userDetails);
    return parsedValue;
}

export const isEmail =  (input:string):boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input)}
