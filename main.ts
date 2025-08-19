// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes'; // You'll need to create this


// bootstrapApplication(App, {
//   providers: [
//     provideRouter(routes),
//     // Add other providers here
//   ]
// }).catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// // 🔑 Your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDrE9D7TSkziOlBq9xyhaUaPAaHdVK_kbE",
//   authDomain: "angularprojectcrud-b8561.firebaseapp.com",
//   projectId: "angularprojectcrud-b8561",
//   storageBucket: "angularprojectcrud-b8561.firebasestorage.app",
//   messagingSenderId: "657576616383",
//   appId: "1:657576616383:web:f56f75a2d21a4c58ccc10a",
//   measurementId: "G-0216M4LSWQ"
// };

// bootstrapApplication(App, {
//   providers: [
//     provideRouter(routes),
//   ]
// });

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrE9D7TSkziOlBq9xyhaUaPAaHdVK_kbE",
  authDomain: "angularprojectcrud-b8561.firebaseapp.com",
  projectId: "angularprojectcrud-b8561",
  storageBucket: "angularprojectcrud-b8561.appspot.com",
  messagingSenderId: "657576616383",
  appId: "1:657576616383:web:f56f75a2d21a4c58ccc10a",
  measurementId: "G-0216M4LSWQ"
};

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
});



