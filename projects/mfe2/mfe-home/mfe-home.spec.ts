import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeHome } from './mfe-home';

describe('MfeHome', () => {
  let component: MfeHome;
  let fixture: ComponentFixture<MfeHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
