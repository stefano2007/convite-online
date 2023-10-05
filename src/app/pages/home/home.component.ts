import { Component, OnInit } from '@angular/core';
import { Aniversatiante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perquisa: string = "HelenaFaz4Anos";
  aniversatiante: Aniversatiante | any = {};
  constructor(
    private service: AniversarianteService
  ){
  }

  ngOnInit(): void {
    this.service.obterAniversariante(this.perquisa)
      .subscribe({
        next: (response: Aniversatiante) => {
          this.aniversatiante = response;
          console.log('response', response);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {}
      });
  }
}
