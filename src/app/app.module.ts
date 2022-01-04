import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';
import {  AmplifyService} from 'aws-amplify-angular'
/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { AppsyncComponent } from './appsync/appsync.component';
import { OfflineComponent } from './offline/offline.component';
/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent,AuthComponent,TodoComponent, AppsyncComponent, OfflineComponent],
  imports: [AmplifyUIAngularModule /* Add Amplify module */, BrowserModule,AppRoutingModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent], 
})
export class AppModule {}


