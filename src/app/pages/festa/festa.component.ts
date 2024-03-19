import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';


@Component({
  selector: 'app-festa',
  templateUrl: './festa.component.html',
  styleUrls: ['./festa.component.css']
})
export class FestaComponent implements OnInit {
  slug:string ='';
  aniversariante: Aniversariante | any = {};
  constructor(
    private route: ActivatedRoute,
    private service: AniversarianteService
  ){
  }

  ngOnInit(): void {

    this.slug = this.route.obterSlug();
    this.service.obterAniversariante()
      .subscribe({
        next: (response: Aniversariante) => {
          this.aniversariante = response;
          console.log('response', response);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {}
      });
  }
}
