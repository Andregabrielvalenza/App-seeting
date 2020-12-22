import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanesGoPhotofeedPage } from './planes-go-photofeed.page';

describe('PlanesGoPhotofeedPage', () => {
  let component: PlanesGoPhotofeedPage;
  let fixture: ComponentFixture<PlanesGoPhotofeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesGoPhotofeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanesGoPhotofeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
