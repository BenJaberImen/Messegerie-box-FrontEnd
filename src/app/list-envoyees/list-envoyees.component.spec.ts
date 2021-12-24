import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvoyeesComponent } from './list-envoyees.component';

describe('ListEnvoyeesComponent', () => {
  let component: ListEnvoyeesComponent;
  let fixture: ComponentFixture<ListEnvoyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnvoyeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvoyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
