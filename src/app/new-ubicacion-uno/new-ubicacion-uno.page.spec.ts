import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewUbicacionUnoPage } from './new-ubicacion-uno.page';

describe('NewUbicacionUnoPage', () => {
  let component: NewUbicacionUnoPage;
  let fixture: ComponentFixture<NewUbicacionUnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUbicacionUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewUbicacionUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
