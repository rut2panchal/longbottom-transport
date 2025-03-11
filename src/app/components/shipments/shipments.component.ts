import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

interface Shipment {
  id: string;
  pickup_date: string;
  pickup_location: string;
  delivery_date: string;
  delivery_location: string;
  distance: number;
  price: number;
  status: string;
}

@Component({
  selector: 'app-shipments',
  imports: [],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss'
})
export class ShipmentsComponent {
  shipments: Shipment[] = [];
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.getShipments().subscribe((data) => {
      this.shipments = (data as any)?.items;
    });
  }

}
