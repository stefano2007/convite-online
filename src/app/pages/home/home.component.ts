import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slug:string ='';

  aniversariante: Aniversariante | any = {};

  linkGoogleMaps = "https://maps.google.com/maps?hl=pt-br&amp;q=jose da costa monteiro 470&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  constructor(
    private route: ActivatedRoute,
    private service: AniversarianteService
  ){
  }

  ngOnInit(): void {
    this.slug = this.route.obterSlug();
    console.log('this.route.obterSlug()', this.route.obterSlug())

    this.service.obterAniversariante()
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
