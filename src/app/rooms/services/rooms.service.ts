import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumbers: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000000,
      photos:
        'https://images.unplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumbers: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000000,
      photos:
        'https://images.unplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.3,
    },
    {
      roomNumbers: 3,
      roomType: 'Private Suite Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 3000000,
      photos:
        'https://images.unplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.9,
    },
  ];

  constructor() {
    console.log('Room Service is called!');
  }

  getRooms() {
    return this.roomList;
  }
}
