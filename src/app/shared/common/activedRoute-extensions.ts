import { ActivatedRoute } from "@angular/router";

declare module "@angular/router"{
  interface ActivatedRoute {
    obterSlugPath(): string;
  }
}

ActivatedRoute.prototype.obterSlugPath = function() {
  return this.snapshot.paramMap.get('slug') || '';
};


