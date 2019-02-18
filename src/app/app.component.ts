import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Valkimia';
    public session;

    constructor(
        private router: Router
    ) {
        this.session = localStorage.getItem('usuario');
    }

    ngOnInit() {
        if (!this.session) {
            this.router.navigateByUrl('/login');
        }
    }

    isActive() {
        return !this.session;
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}




