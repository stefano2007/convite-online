import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariosFormComponent } from './aniversarios-form.component';

describe('AniversariosFormComponent', () => {
  let component: AniversariosFormComponent;
  let fixture: ComponentFixture<AniversariosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AniversariosFormComponent]
    });
    fixture = TestBed.createComponent(AniversariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
