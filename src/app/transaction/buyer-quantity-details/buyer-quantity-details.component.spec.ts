import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerQuantityDetailsComponent } from './buyer-quantity-details.component';

describe('BuyerQuantityDetailsComponent', () => {
  let component: BuyerQuantityDetailsComponent;
  let fixture: ComponentFixture<BuyerQuantityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerQuantityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerQuantityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
