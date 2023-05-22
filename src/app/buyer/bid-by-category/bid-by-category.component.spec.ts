import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidByCategoryComponent } from './bid-by-category.component';

describe('BidByCategoryComponent', () => {
  let component: BidByCategoryComponent;
  let fixture: ComponentFixture<BidByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
