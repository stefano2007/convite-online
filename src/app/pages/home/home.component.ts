import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slug:string ='';
  aniversariante: Aniversariante | any = {};

  constructor(
    private route: ActivatedRoute,
    private service: AniversarianteService,
    private repoLocalStorage: LocalStorageService
  ){
  }

  ngOnInit(): void {
    this.slug = this.route.obterSlugPath();
    this.service.obterAniversariante(this.slug)
      .subscribe({
        next: (response: Aniversariante) => {
          this.aniversariante = response;
          if(response.id){
            this.repoLocalStorage.salvarAniversarioId(this.slug, this.aniversariante.id);
          }
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {}
      });
  }
}
