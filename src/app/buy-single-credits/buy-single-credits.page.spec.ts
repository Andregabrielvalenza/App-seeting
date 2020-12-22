import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuySingleCreditsPage } from './buy-single-credits.page';

describe('BuySingleCreditsPage', () => {
  let component: BuySingleCreditsPage;
  let fixture: ComponentFixture<BuySingleCreditsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySingleCreditsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuySingleCreditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
