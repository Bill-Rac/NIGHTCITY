import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: any[] = []; // Propiedad para almacenar los datos de la API fakestoreapi/products
  itemCount = 4; // Cantidad específica de productos a cargar

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
    this.loadItems(); // Llama al método para obtener los productos
  }

  loadItems() {
    this.apiService.getProducts().subscribe(data => {
      // Limita la cantidad de productos según itemCount
      this.items = data.slice(0, this.itemCount);
      console.log(this.items);
    });
  }
}
