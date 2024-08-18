import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosFormComponent } from './fotos-form.component';

describe('FotosFormComponent', () => {
  let component: FotosFormComponent;
  let fixture: ComponentFixture<FotosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosFormComponent]
    });
    fixture = TestBed.createComponent(FotosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
