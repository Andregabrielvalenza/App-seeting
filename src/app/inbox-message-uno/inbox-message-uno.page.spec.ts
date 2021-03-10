import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InboxMessageUnoPage } from './inbox-message-uno.page';

describe('InboxMessageUnoPage', () => {
  let component: InboxMessageUnoPage;
  let fixture: ComponentFixture<InboxMessageUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMessageUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InboxMessageUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
