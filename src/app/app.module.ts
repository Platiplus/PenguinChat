import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDJdxA53pcDVVImR6xxlrhcnz9oZJOTLG0",
    authDomain: "penguinchat-aa46f.firebaseapp.com",
    databaseURL: "https://penguinchat-aa46f.firebaseio.com",
    projectId: "penguinchat-aa46f",
    storageBucket: "penguinchat-aa46f.appspot.com",
    messagingSenderId: "459062185501"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}