import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'endpoint',
        component: PostsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
