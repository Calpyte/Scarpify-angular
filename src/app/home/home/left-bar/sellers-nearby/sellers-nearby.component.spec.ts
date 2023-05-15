/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellersNearbyComponent } from './sellers-nearby.component';

describe('SellersNearbyComponent', () => {
  let component: SellersNearbyComponent;
  let fixture: ComponentFixture<SellersNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
