import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-fuck',
  templateUrl: './fuck.component.html',
  styleUrls: ['./fuck.component.css']
})
export class FuckComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  closePopup() {
  // Providing a `null` value to the named outlet
  // clears the contents of the named outlet
  this.router.navigate([{ outlets: { popup: null }}]);
  }

}
