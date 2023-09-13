import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any[] = []; // Propiedad para almacenar los datos de /todos

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadFirstTenTodos(); // Llama al método para obtener los primeros 10 elementos
  }

  loadFirstTenTodos() {
    this.apiService.getFirstTenTodos().subscribe(data => {
      this.todos = data; // Almacena los datos en la propiedad "todos"
      console.log(this.todos);
    });
  }
}
