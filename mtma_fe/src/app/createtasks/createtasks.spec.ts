import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createtasks } from './createtasks';

describe('Createtasks', () => {
  let component: Createtasks;
  let fixture: ComponentFixture<Createtasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createtasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createtasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
