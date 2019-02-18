import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {ToastrManager} from 'ng6-toastr-notifications';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users$: Observable<any[]>;
    public edit_id;

    constructor(
        private db: AngularFireDatabase,
        public toastr: ToastrManager,
        private data: DataService,
        private router: Router
    ) {
        this.users$ = data.getUsuarios();
        this.edit_id = '';
    }

    editar(key, documento, nombre, apellido, direccion, telefono, estado) {
        this.edit_id = {
            'key': key,
            'documento': documento,
            'nombre': nombre,
            'apellido': apellido,
            'direccion': direccion,
            'telefono': telefono,
            'estado': estado,
        };
    }

    delete(id) {
        this.data.eliminarUsuario(id);
        this.toastr.warningToastr('Eliminado correctamente', 'Alert!');
        this.edit_id = '';
    }

    ngOnInit() {
        let usuario = localStorage.getItem('usuario');
        if (!usuario) {
            this.router.navigateByUrl('/login');
        }
    }

}
