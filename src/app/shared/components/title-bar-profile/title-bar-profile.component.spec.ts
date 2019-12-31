import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarProfileComponent } from './title-bar-profile.component';

describe('TitleBarProfileComponent', () => {
  let component: TitleBarProfileComponent;
  let fixture: ComponentFixture<TitleBarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
