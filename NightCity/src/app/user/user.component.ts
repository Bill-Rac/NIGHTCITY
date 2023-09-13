import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any[] = []; // Propiedad para almacenar los datos de /todos

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadFirstTenUsers(); // Llama al método para obtener los primeros 10 elementos
  }

  loadFirstTenUsers() {
    this.apiService.getFirstTenUsers().subscribe(data => {
      this.users = data; // Almacena los datos en la propiedad "todos"
      console.log(this.users);
    });
  }
}
