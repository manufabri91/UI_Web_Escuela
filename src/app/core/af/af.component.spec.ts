import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfComponent } from './af.component';

describe('AfComponent', () => {
  let component: AfComponent;
  let fixture: ComponentFixture<AfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
