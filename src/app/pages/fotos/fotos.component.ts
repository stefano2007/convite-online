import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/shared/Interfaces/foto';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';
import { FotoService } from 'src/app/shared/services/foto.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];

  constructor(
    private fotoSrvice : FotoService,
    private aniversarrianteService : AniversarianteService
  ) {}

  ngOnInit(): void {

    let aniversarioId = this.aniversarrianteService.obterAniversarioId();

    this.fotoSrvice.obterFotosAniversariante(aniversarioId)
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
