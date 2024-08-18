import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from 'src/app/shared/Interfaces/foto';
import { FotoService } from 'src/app/shared/services/foto.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];
  slug: string='';

  constructor(
    private route: ActivatedRoute,
    private fotoService : FotoService,
    private repoLocalStorage : LocalStorageService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.obterSlugPath()
    let aniversarioId = this.repoLocalStorage.obterAniversarioId(this.slug);

    this.fotoService.obterFotosAniversariante(aniversarioId)
    .subscribe({
      next: (response: Foto[]) => {
        this.fotos = response;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {}
    });
  }
}
