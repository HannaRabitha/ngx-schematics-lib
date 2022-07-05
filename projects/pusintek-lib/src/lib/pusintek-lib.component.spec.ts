import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PusintekLibComponent } from './pusintek-lib.component';

describe('PusintekLibComponent', () => {
  let component: PusintekLibComponent;
  let fixture: ComponentFixture<PusintekLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PusintekLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PusintekLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
