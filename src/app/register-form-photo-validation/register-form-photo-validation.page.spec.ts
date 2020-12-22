import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFormPhotoValidationPage } from './register-form-photo-validation.page';

describe('RegisterFormPhotoValidationPage', () => {
  let component: RegisterFormPhotoValidationPage;
  let fixture: ComponentFixture<RegisterFormPhotoValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormPhotoValidationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormPhotoValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
