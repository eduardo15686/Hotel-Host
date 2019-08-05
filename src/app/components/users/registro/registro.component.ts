import { Component, OnInit, Inject, ElementRef,ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';
import{UsersService} from "../../../services/users.service";
import {UserInterface} from "../../../models/usersInterface";
import { NgForm} from "@angular/forms/";
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from "rxjs/operators";
import { Observable } from 'rxjs/internal/observable';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserInterface = {
  nombre: '',
  apellido: '',
  correo: '',
  usuario: '',
  telefono: '',
  contrasena: '',
  tipo_usuario: ''
};

  dialog: any;
  constructor(public dialogRef: MatDialogRef<RegistroComponent>,private userService: UsersService,
    @Inject(MAT_DIALOG_DATA)public data: any, private storage: AngularFireStorage) {
     }

    //@ViewChild('imageUser') inputImageUser: ElementRef;
    uploadPercent: Observable<number>;
    urlImage: Observable<string>;

  ngOnInit() {
  }
  //registrar usuario

  //obtener un mensaje de error si el correo no es valido
  email = new FormControl('', [Validators.required, Validators.email]);
  getEmailError() {
    return this.email.hasError('required') ? 'Debes ingresar un correo' :
        this.email.hasError('email') ? 'Correo Invalido' :
            '';
  }
  //obtener un mensaje de error si la contraseña no es valida
  password = new FormControl('', [Validators.required]);
  getPasswordError() {
    return this.password.hasError('required') ? 'Contraseña obligatoria' :
            '';
  }

  //subir imagenes
  onUpload(e){
    //console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/hotel_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

  }
  //Funciones de los botones para cerrar o aceptar en la ventana modal
  aceptar(): void {
    this.dialogRef.close();
  }
  cerrar(): void {
    this.dialogRef.close();
  }
  hide = true;

  IniciarSesion(): void {
    const dialogRef = this.dialog.open(IniciarSesionComponent, {
      width: '400px'
    });
    this.dialogRef.close();
  }

  onNuevoUsuario(myForm: NgForm){
    this.userService.addUser(this.user);
  }
}


