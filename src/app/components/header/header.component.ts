import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IniciarSesionComponent } from '../users/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from '../users/registro/registro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  IniciarSesion(): void {
    const dialogRef = this.dialog.open(IniciarSesionComponent, {
      width: '400px'
    });
  }
  Registro(): void {
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '620px'
    });
  }
  ngOnInit() {
  }

}
