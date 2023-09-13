import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: any[] = []; // Propiedad para almacenar los datos de /todos

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadFirstTenComments(); // Llama al método para obtener los primeros 10 elementos
  }


  loadFirstTenComments() {
    this.apiService.getFirstTenComments().subscribe(data => {
      this.comments = data; // Almacena los datos en la propiedad "todos"
      console.log(this.comments);
    });
  }
}
