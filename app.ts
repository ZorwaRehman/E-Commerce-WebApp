// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { importProvidersFrom } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// // Import your login component (standalone)
// import { LoginComponent } from './components/login/login';

// // 🔑 Your Firebase config (replace with your actual values from Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyDrE9D7TSkziOlBq9xyhaUaPAaHdVK_kbE",
//   authDomain: "angularprojectcrud-b8561.firebaseapp.com",
//   projectId: "angularprojectcrud-b8561",
//   storageBucket: "angularprojectcrud-b8561.firebasestorage.app",
//   messagingSenderId: "657576616383",
//   appId: "1:657576616383:web:f56f75a2d21a4c58ccc10a",
//   measurementId: "G-0216M4LSWQ"
// };

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     LoginComponent,  // ✅ use standalone LoginComponent
//     FormsModule
//   ],
//   template: `
//     <main class="bg-light min-vh-100">
//       <router-outlet></router-outlet>
//     </main>
//   `,
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('E-CommerceApp');
// }

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="bg-light min-vh-100">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('E-CommerceApp');
}



