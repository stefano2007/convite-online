import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosTableComponent } from './fotos-table.component';

describe('FotosTableComponent', () => {
  let component: FotosTableComponent;
  let fixture: ComponentFixture<FotosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosTableComponent]
    });
    fixture = TestBed.createComponent(FotosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
