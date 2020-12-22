import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InboxReportUserPage } from './inbox-report-user.page';

describe('InboxReportUserPage', () => {
  let component: InboxReportUserPage;
  let fixture: ComponentFixture<InboxReportUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxReportUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InboxReportUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
