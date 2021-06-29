import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelvanComponent } from './selvan.component';

describe('SelvanComponent', () => {
  let component: SelvanComponent;
  let fixture: ComponentFixture<SelvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
