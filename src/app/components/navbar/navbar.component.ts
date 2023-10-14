import { Component, Input, OnInit } from '@angular/core';
import { Aniversariante } from 'src/app/shared/Interfaces/aniversariante';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @Input() aniversariante : Aniversariante | any ={};

  constructor(){ }

  ngOnInit(): void {
  }
}
