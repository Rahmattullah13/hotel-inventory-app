import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private configService: ConfigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: [''],
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guestCount: [''],
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
  }
}
