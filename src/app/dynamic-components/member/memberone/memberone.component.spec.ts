import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberoneComponent } from './memberone.component';

describe('MemberoneComponent', () => {
  let component: MemberoneComponent;
  let fixture: ComponentFixture<MemberoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
