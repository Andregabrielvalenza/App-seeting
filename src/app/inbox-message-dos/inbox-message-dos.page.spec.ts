import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InboxMessageDosPage } from './inbox-message-dos.page';

describe('InboxMessageDosPage', () => {
  let component: InboxMessageDosPage;
  let fixture: ComponentFixture<InboxMessageDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMessageDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InboxMessageDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
