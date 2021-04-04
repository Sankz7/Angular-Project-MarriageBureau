// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = 
{
  production: false,
  // Add this to access firebase in our project
  firebase :
  {
    // Copy this contents from our firebase creation
    apiKey: "AIzaSyBHbOX_XqQ0TfCS6ad47DZ3c5e2S9Ibqas",
    authDomain: "marvellousfirebase-5033d.firebaseapp.com",
    databaseURL: "https://marvellousfirebase-5033d.firebaseio.com",
    projectId: "marvellousfirebase-5033d",
    storageBucket: "marvellousfirebase-5033d.appspot.com",
    messagingSenderId: "20346013851"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
