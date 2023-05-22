import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerLeftBarComponent } from './buyer-left-bar.component';

describe('BuyerLeftBarComponent', () => {
  let component: BuyerLeftBarComponent;
  let fixture: ComponentFixture<BuyerLeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerLeftBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
