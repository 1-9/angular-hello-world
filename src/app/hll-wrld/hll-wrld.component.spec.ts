import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HllWrldComponent } from './hll-wrld.component';

describe('HllWrldComponent', () => {
  let component: HllWrldComponent;
  let fixture: ComponentFixture<HllWrldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HllWrldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HllWrldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
