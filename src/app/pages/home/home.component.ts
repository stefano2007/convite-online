import { Component, OnInit } from '@angular/core';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perquisa: string = "HelenaFaz4Anos";
  aniversariante: Aniversariante | any = {};
  constructor(
    private service: AniversarianteService
  ){
  }

  ngOnInit(): void {
    this.service.obterAniversariante(this.perquisa)
      .subscribe({
        next: (response: Aniversariante) => {
          this.aniversariante = response;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {}
      });
  }
}
