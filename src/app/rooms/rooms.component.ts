import {
  Component,
  DoCheck,
  ViewChild,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
  SkipSelf,
  OnDestroy,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelName = 'Accor Hotel';

  numberOfRooms = 10;

  hideRooms = true;

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

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error("error")
  });

  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Complete'),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));
    //  this.roomsService.getRooms$.subscribe((rooms) => {
    //     this.roomList = rooms;
    //   });
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
      roomNumber: '',
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
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2000000,
      photos:
        'https://images.unplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.7,
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
