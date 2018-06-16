import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverBoxComponent } from './hover-box.component';

describe('HoverBoxComponent', () => {
  let component: HoverBoxComponent;
  let fixture: ComponentFixture<HoverBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
