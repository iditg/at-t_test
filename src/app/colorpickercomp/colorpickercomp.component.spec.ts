import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickercompComponent } from './colorpickercomp.component';

describe('ColorpickercompComponent', () => {
  let component: ColorpickercompComponent;
  let fixture: ComponentFixture<ColorpickercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpickercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
