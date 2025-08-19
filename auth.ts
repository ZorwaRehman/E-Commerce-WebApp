
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }

  // Login with email/password
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }

  // Register with email/password
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  // Sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    });
  }

  // Google sign in
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', JSON.stringify(true));
      }, err => {
        alert(err.message);
      });
  }
}