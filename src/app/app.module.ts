import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {FormsModule} from '@angular/forms';

import{HotelHostService} from './services/hotel-host.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatToolbarModule,
  MatGridListModule,
  MatMenuTrigger,
  MatSelectModule,
  MatNativeDateModule,
  MatIconModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { IniciarSesionComponent } from './components/users/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/users/registro/registro.component';



import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AuthComponent } from './services/auth/auth.component';
import { DataApiComponent } from './services/data-api/data-api.component';
import { SubirHotelComponent } from './components/subir-hotel/subir-hotel.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IniciarSesionComponent,
    InicioComponent,
    RegistroComponent,
    AuthComponent,
    DataApiComponent,
    SubirHotelComponent,
    PrincipalComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'Hotel-Host'),
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  providers: [HotelHostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
