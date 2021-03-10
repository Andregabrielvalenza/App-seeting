import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermisoFotoPage } from './permiso-foto.page';

describe('PermisoFotoPage', () => {
  let component: PermisoFotoPage;
  let fixture: ComponentFixture<PermisoFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisoFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermisoFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
