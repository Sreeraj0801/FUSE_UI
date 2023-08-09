import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { environment } from 'src/environment/environment';
const {
  firebaseEnv: {
    FR_API_KEY,
    FR_AUTH_DOMAIN,
    FR_MEASUREMENT_ID,
    FR_PROJECT_ID,
    FR_APP_ID,
    FR_DATABASE_URL,
    FR_MESSAGING_SENDER_ID,
    FR_STORAGE_BUCKET,
  }
} = environment;
const firebaseConfig = {
  apiKey: FR_API_KEY,
  authDomain: FR_AUTH_DOMAIN,
  databaseURL: FR_DATABASE_URL,
  projectId: FR_PROJECT_ID,
  storageBucket: FR_STORAGE_BUCKET,
  messagingSenderId: FR_MESSAGING_SENDER_ID,
  appId: FR_APP_ID,
  measurementId: FR_MEASUREMENT_ID,
};

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {
  provider: any;
  auth: any;
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  loginWithGoogle = async () => {
    try {
      return await signInWithPopup(this.auth, this.provider);
    } catch (error) {
      throw {error:"Google signUp failed"}
    }
  };
}
