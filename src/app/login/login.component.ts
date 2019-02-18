import {Component, OnInit} from '@angular/core';
import {Login} from '../models/login';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public login: Login;
    public alert: string;

    constructor(private router: Router) {
        this.login = new Login('', '');
    }

    ngOnInit() {
        let usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.router.navigateByUrl('/');
        }
    }

    onSubmit() {
        let params = this.login;
        let user = params.usuario;
        let password = params.password;
        if (user == 'demo' && password == 'demo') {
            localStorage.setItem('usuario', 'demo');
            this.router.navigateByUrl('/');
        } else {
            this.alert = 'Datos incorrectos';
        }
    }

}
