import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  slug: string="";

  constructor(
    private route: ActivatedRoute,
    ){ }

  ngOnInit(): void {
    this.slug = this.route.obterSlugPath();
  }
}
