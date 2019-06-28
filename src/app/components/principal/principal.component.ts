import { Component, OnInit } from '@angular/core';
import { HotelHostService} from "../../services/hotel-host.service"
import { HotelInterface} from "../../models/hotelInterface";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
hotels: HotelInterface[];

  constructor(private hotelService: HotelHostService) { }

  ngOnInit() {
    
    this.hotelService.getHotels().subscribe(hotels =>{
      console.log(hotels);
      this.hotels = hotels;
    });
  }

}
