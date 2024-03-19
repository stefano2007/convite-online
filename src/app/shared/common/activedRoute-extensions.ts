import { ActivatedRoute } from "@angular/router";

declare module "@angular/router"{
  interface ActivatedRoute {
    obterSlug(): string;
  }
}

ActivatedRoute.prototype.obterSlug = function() {
  return this.snapshot.paramMap.get('slug') || '';
};


