import { Component, Optional, OnInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  constructor(@Optional() private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');
  }

  // Dynamic Load Component
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);

  //   componentRef.instance.numberOfRooms = 50;
  // }

  // hotelName: any;
  // role = 'Admin';
}
