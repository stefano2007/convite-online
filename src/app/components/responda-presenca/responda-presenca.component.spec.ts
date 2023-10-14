import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondaPresencaComponent } from './responda-presenca.component';

describe('RespondaPresencaComponent', () => {
  let component: RespondaPresencaComponent;
  let fixture: ComponentFixture<RespondaPresencaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespondaPresencaComponent]
    });
    fixture = TestBed.createComponent(RespondaPresencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
