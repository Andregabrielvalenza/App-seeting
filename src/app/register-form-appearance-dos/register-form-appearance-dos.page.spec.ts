import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFormAppearanceDosPage } from './register-form-appearance-dos.page';

describe('RegisterFormAppearanceDosPage', () => {
  let component: RegisterFormAppearanceDosPage;
  let fixture: ComponentFixture<RegisterFormAppearanceDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormAppearanceDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormAppearanceDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
