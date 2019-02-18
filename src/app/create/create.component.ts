import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Users} from '../models/users';
import {AngularFireDatabase} from 'angularfire2/database';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {ToastrManager} from "ng6-toastr-notifications";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    registerForm: FormGroup;
    public usuario: Users;
    public titleCard: String = 'Nuevo usuario';
    @Input() id_editar;

    constructor(private db: AngularFireDatabase,
                private formBuilder: FormBuilder,
                public toastr: ToastrManager,
                private data: DataService) {
        this.usuario = new Users(null, '', '', '', null, null);
    }

    ngOnChanges() {
        if (this.id_editar) {
            this.titleCard = 'Editar usuario: ' + this.id_editar.nombre;
            this.usuario = new Users(this.id_editar.documento, this.id_editar.nombre, this.id_editar.apellido, this.id_editar.direccion, this.id_editar.telefono, this.id_editar.estado);
        } else {
            this.usuario = new Users(null, '', '', '', null, null);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            documento: ['', [Validators.required, Validators.minLength(1)]],
            apellido: ['', [Validators.required, Validators.minLength(1)]],
            nombre: ['', [Validators.required, Validators.minLength(1)]],
            direccion: ['', [Validators.required, Validators.minLength(1)]],
            telefono: ['', [Validators.required, Validators.minLength(1)]],
            estado: ['', [Validators.required, Validators.minLength(1)]],
        });
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            return;
        } else {
            if (this.id_editar.key) {
                this.data.editarUsuario(this.id_editar.key, this.usuario);
                this.toastr.successToastr('Editado satisfactoriamente', 'Success!');
            } else {
                this.data.crearUsuario(this.usuario);
                this.toastr.successToastr('Agregado satisfactoriamente', 'Success!');
            }
            this.id_editar = '';
            this.usuario = new Users(null, '', '', '', null, null);
            this.titleCard = 'Nuevo usuario';
            this.registerForm.reset();
        }
    }

    get f() {
        return this.registerForm.controls;
    }

}
