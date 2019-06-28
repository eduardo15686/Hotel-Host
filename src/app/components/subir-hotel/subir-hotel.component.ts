import { Component, OnInit } from '@angular/core';
import { HotelHostService} from "../../services/hotel-host.service"
import { HotelInterface} from "../../models/hotelInterface";
import { NgForm} from "@angular/forms/";

export interface Habitacion {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-subir-hotel',
  templateUrl: './subir-hotel.component.html',
  styleUrls: ['./subir-hotel.component.css']
})
export class SubirHotelComponent implements OnInit {
 hotel: HotelInterface = {
   nombre_hotel: '',
   ciudad: '',
   estado: '',
   ubicacion: '',
   tipo_habitacion: '',
   precio: '',
   descripcion: ''
 };
  constructor(private hotelService: HotelHostService) { }

  ngOnInit() {
    
  }

  onGuardarHotel(myForm: NgForm){
    this.hotelService.addHotel(this.hotel);

  }


}
