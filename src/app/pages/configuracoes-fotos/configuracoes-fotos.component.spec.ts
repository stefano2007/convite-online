import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesFotosComponent } from './configuracoes-fotos.component';

describe('ConfiguracoesFotosComponent', () => {
  let component: ConfiguracoesFotosComponent;
  let fixture: ComponentFixture<ConfiguracoesFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracoesFotosComponent]
    });
    fixture = TestBed.createComponent(ConfiguracoesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
