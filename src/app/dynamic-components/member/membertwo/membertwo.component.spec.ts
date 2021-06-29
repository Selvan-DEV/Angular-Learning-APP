import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembertwoComponent } from './membertwo.component';

describe('MembertwoComponent', () => {
  let component: MembertwoComponent;
  let fixture: ComponentFixture<MembertwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembertwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
