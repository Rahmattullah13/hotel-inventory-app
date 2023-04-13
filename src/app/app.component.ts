import { Component, Optional, OnInit, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService
  ) {
    console.log(initService.config);
  }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit()');

    this.localStorage.setItem('name', 'Accor Hotel');
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
