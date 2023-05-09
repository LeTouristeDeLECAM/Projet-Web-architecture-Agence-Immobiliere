import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRenterComponent } from './edit-renter.component';

describe('EditRenterComponent', () => {
  let component: EditRenterComponent;
  let fixture: ComponentFixture<EditRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
