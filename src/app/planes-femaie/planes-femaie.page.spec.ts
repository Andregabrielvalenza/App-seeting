import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanesFemaiePage } from './planes-femaie.page';

describe('PlanesFemaiePage', () => {
  let component: PlanesFemaiePage;
  let fixture: ComponentFixture<PlanesFemaiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesFemaiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanesFemaiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
