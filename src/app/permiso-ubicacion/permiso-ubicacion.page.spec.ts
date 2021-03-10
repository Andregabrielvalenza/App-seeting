import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermisoUbicacionPage } from './permiso-ubicacion.page';

describe('PermisoUbicacionPage', () => {
  let component: PermisoUbicacionPage;
  let fixture: ComponentFixture<PermisoUbicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisoUbicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermisoUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
