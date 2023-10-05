import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoCardComponent } from './foto-card.component';

describe('FotoCardComponent', () => {
  let component: FotoCardComponent;
  let fixture: ComponentFixture<FotoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoCardComponent]
    });
    fixture = TestBed.createComponent(FotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
