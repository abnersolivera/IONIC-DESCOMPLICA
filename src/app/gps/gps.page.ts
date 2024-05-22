import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  public lat = 0;
  public lng = 0;
  constructor() { }

  ngOnInit() {
    this.getGeolocation();
  }

  getGeolocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if(position){
          console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
        }
      },
    (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
