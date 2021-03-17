import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(

    private afauth: AngularFireAuth,
    private router: Router
  ) { }

  logout()
  {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/singup']);
    })
  }

  ngOnInit() {
  }

}
