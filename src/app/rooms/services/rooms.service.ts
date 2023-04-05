import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    
    console.log('Room Service Initialized...');
  }

  getRooms() {
    return this.roomList;
  }
}
