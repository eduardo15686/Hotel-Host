import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IniciarSesionComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any) { }
  
  ngOnInit() {
  }
  

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
  

  //Funciones de los botones para cerrar o aceptar en la ventana modal
  aceptar(): void {
    this.dialogRef.close();
  }
  cerrar(): void {
    this.dialogRef.close();
  }
  hide = true;
}
