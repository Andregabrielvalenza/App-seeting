import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanesMalePage } from './planes-male.page';

describe('PlanesMalePage', () => {
  let component: PlanesMalePage;
  let fixture: ComponentFixture<PlanesMalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesMalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanesMalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
