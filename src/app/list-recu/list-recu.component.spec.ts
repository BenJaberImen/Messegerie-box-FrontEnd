import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecuComponent } from './list-recu.component';

describe('ListRecuComponent', () => {
  let component: ListRecuComponent;
  let fixture: ComponentFixture<ListRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
