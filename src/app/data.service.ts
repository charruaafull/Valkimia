import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient,
                private db: AngularFireDatabase) {
    }

    public getUsuarios() {
        return this.db.list('users')
            .snapshotChanges()
            .pipe(map(items => {             // <== new way of chaining
                return items.map(a => {
                    const data = a.payload.val();
                    const key = a.payload.key;
                    return {key, data};           // or {key, ...data} in case data is Obj
                });
            }));
    }

    public crearUsuario(usuario) {
        const itemsRef = this.db.list('users');
        let param = {
            'documento': usuario.documento,
            'nombre': usuario.nombre,
            'apellido': usuario.apellido,
            'direccion': usuario.direccion,
            'telefono': usuario.telefono,
            'estado': usuario.estado,
        };
        return itemsRef.push(param);
    }

    public editarUsuario(key, usuario) {
        const itemsRef = this.db.list('users');
        let param = {
            'documento': usuario.documento,
            'nombre': usuario.nombre,
            'apellido': usuario.apellido,
            'direccion': usuario.direccion,
            'telefono': usuario.telefono,
            'estado': usuario.estado,
        };
        return itemsRef.update(key, param);
    }

    public eliminarUsuario(id) {
        const itemsRef = this.db.list('users');
        return itemsRef.remove(id);
    }

    public getEndPoint() {
        return this.http.get('http://www.mocky.io/v2/5c64a4053300005500b99924');
    }

}
