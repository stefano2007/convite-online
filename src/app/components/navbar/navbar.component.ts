import { Component, Input } from '@angular/core';
import { Aniversatiante } from 'src/app/shared/Interfaces/aniversariante';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() aniversatiante : Aniversatiante | any ={};

}
