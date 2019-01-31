import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {
    const config = {
      apiKey: 'AIzaSyA-oQCX16kuCmmDKF2qkYlbJhJ4Ptqr9d8',
      authDomain: 'http-client-demo-21dc2.firebaseapp.com',
      databaseURL: 'https://http-client-demo-21dc2.firebaseio.com',
      projectId: 'http-client-demo-21dc2',
      storageBucket: 'http-client-demo-21dc2.appspot.com',
      messagingSenderId: '303339094931'
    };

    firebase.initializeApp(config);
  }

}
