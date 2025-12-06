import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyingOnYourPhoneComponent } from './spying-on-your-phone.component';

describe('SpyingOnYourPhoneComponent', () => {
  let component: SpyingOnYourPhoneComponent;
  let fixture: ComponentFixture<SpyingOnYourPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyingOnYourPhoneComponent]
    });
    fixture = TestBed.createComponent(SpyingOnYourPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
