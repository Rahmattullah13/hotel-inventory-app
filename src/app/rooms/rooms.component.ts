import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Accor Hotel';

  hideRooms = false;

  numberOfRooms = 10;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
