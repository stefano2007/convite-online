import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPresencaComponent } from './confirmar-presenca.component';

describe('ConfirmarPresencaComponent', () => {
  let component: ConfirmarPresencaComponent;
  let fixture: ComponentFixture<ConfirmarPresencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarPresencaComponent]
    });
    fixture = TestBed.createComponent(ConfirmarPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
