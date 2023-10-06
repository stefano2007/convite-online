import { Component, OnInit, Input } from '@angular/core';
import { Foto } from 'src/app/shared/Interfaces/foto';

@Component({
  selector: 'app-carrossel-fotos',
  templateUrl: './carrossel-fotos.component.html',
  styleUrls: ['./carrossel-fotos.component.css']
})
export class CarrosselFotosComponent implements OnInit {

  @Input() fotos: Foto[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
