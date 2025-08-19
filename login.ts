import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: Auth) {}

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log("Google login success:", result.user);
      alert(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed! Check console.");
    }
  }

  async onSubmit() {
    try {
      const user = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log("Email login success:", user.user);
      alert(`Welcome ${user.user.email}`);
    } catch (error) {
      console.error("Email login failed:", error);
      alert("Invalid email or password!");
    }
  }
}
