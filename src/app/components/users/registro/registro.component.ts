import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IniciarSesionComponent } from '../iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  dialog: any;

  constructor(public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any) { }


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

  password2 = new FormControl('', [Validators.required]);
  getPasswordError2() {
    return this.password.hasError('required') ? 'Contraseña obligatoria' :
            '';
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
}


