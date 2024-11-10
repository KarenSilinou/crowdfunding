import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingFormComponent } from './funding-form.component';

describe('FundingFormComponent', () => {
  let component: FundingFormComponent;
  let fixture: ComponentFixture<FundingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}
