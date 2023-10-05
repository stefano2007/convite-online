import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/shared/Interfaces/foto';

@Component({
  selector: 'app-foto-card',
  templateUrl: './foto-card.component.html',
  styleUrls: ['./foto-card.component.css']
})
export class FotoCardComponent implements OnInit{

  @Input() foto: Foto | any = {};

  constructor(){}

  ngOnInit(): void {

  }
}
