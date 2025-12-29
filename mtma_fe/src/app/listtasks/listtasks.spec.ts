import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listtasks } from './listtasks';

describe('Listtasks', () => {
  let component: Listtasks;
  let fixture: ComponentFixture<Listtasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listtasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listtasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
