import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PurchaseConfirmationUnoPage } from './purchase-confirmation-uno.page';

describe('PurchaseConfirmationUnoPage', () => {
  let component: PurchaseConfirmationUnoPage;
  let fixture: ComponentFixture<PurchaseConfirmationUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseConfirmationUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseConfirmationUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
