import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responda-presenca',
  templateUrl: './responda-presenca.component.html',
  styleUrls: ['./responda-presenca.component.css']
})
export class RespondaPresencaComponent implements OnInit{

marcaPresenca : boolean = true;

constructor(){}

ngOnInit(): void {

}

setaMarcarPresenca(marca: boolean){
  this.marcaPresenca = marca;
}



}
