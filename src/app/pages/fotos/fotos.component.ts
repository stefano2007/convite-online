import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/shared/Interfaces/foto';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];

  constructor(
    private service : AniversarianteService
  ) {}

  ngOnInit(): void {
    this.service.obterFotosAniversariante()
    .subscribe({
      next: (response: Foto[]) => {
        this.fotos = response;
        console.log('response', response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {}
    });
  }
}
