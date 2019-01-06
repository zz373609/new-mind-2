import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoisePage } from './noise.page';

describe('NoisePage', () => {
  let component: NoisePage;
  let fixture: ComponentFixture<NoisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
