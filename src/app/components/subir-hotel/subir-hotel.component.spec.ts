import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirHotelComponent } from './subir-hotel.component';

describe('SubirHotelComponent', () => {
  let component: SubirHotelComponent;
  let fixture: ComponentFixture<SubirHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
