import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.getSwUpdate();
  }

  getSwUpdate() {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}
