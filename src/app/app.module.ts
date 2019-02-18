import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {CreateComponent} from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireStorageModule} from 'angularfire2/storage';
import {ToastrModule} from "ng6-toastr-notifications";

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        PostsComponent,
        UsersComponent,
        LoginComponent,
        CreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyCW-RVTGxPiwAnkzWqfM7PMZDMxlaoXtfg",
            authDomain: "valkimia-73623.firebaseapp.com",
            databaseURL: "https://valkimia-73623.firebaseio.com",
            projectId: "valkimia-73623",
            storageBucket: "",
            messagingSenderId: "781135233702"
        }),
        AngularFireStorageModule
    ],
    providers: [AngularFireDatabase],
    bootstrap: [AppComponent]
})
export class AppModule {
}
