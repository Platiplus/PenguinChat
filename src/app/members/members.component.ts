import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  chatSend(theirMessage: string){
    this.items.push({ message : theirMessage, name: this.name.facebook.displayName});
    this.msgVal = '';
  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

  ngOnInit(){
  }
}
