import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent,AuthComponent,TodoComponent],
  imports: [AmplifyUIAngularModule /* Add Amplify module */, BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}


