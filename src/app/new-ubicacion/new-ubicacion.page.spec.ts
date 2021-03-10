import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewUbicacionPage } from './new-ubicacion.page';

describe('NewUbicacionPage', () => {
  let component: NewUbicacionPage;
  let fixture: ComponentFixture<NewUbicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUbicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
