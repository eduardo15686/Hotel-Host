import { Component, OnInit } from '@angular/core';

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
 
  constructor() { }

  ngOnInit() {
    
  }


}
