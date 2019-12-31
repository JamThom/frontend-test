import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchBoxComponent } from './home-search-box.component';

describe('HomeSearchBoxComponent', () => {
  let component: HomeSearchBoxComponent;
  let fixture: ComponentFixture<HomeSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
