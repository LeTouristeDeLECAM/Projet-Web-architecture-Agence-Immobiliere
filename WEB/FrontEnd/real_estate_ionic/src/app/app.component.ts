import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Appartement', url: '/appartement', icon: 'home' },
    { title: 'Login', url: '/login', icon:'paper-plane' },
  ];
  // public labels = ['Family'];
  
  constructor() {}
}
