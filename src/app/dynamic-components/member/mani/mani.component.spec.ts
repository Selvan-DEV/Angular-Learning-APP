import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiComponent } from './mani.component';

describe('ManiComponent', () => {
  let component: ManiComponent;
  let fixture: ComponentFixture<ManiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
