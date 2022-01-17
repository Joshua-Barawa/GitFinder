import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderFormComponent } from './finder-form.component';

describe('FinderFormComponent', () => {
  let component: FinderFormComponent;
  let fixture: ComponentFixture<FinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
