import {
  Component,
  DoCheck,
  ViewChild,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
  SkipSelf
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Accor Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  // To Creat Multiple Component
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); //this is a service

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumbers: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2000000,
      photos:
        'https://images.unplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.7,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
function SkipShelf(target: typeof RoomsComponent, propertyKey: undefined, parameterIndex: 0): void {
  throw new Error('Function not implemented.');
}

