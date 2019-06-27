import { Component, OnInit } from '@angular/core';
import {HotelInterface} from '../../models/hotelInterface';
import {HotelHostService} from '../../services/hotel-host.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private hotelService: HotelHostService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(hotels => {
      console.log(hotels);
    })
  }
}
