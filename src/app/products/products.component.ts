import { Component, OnInit } from '@angular/core';
import { ProductsapiService } from '../productsapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [] as any;
  constructor(private service: ProductsapiService) { }

  ngOnInit(): void {
    this.service.obtenerProductos().subscribe((resp: any)=>{
      //resp contiene lo datos de la api
      this.products=resp;
      console.log('Produts:', this.products);
    })
  }

}
