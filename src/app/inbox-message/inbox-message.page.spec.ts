import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InboxMessagePage } from './inbox-message.page';

describe('InboxMessagePage', () => {
  let component: InboxMessagePage;
  let fixture: ComponentFixture<InboxMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InboxMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
