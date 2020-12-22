import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFormPhotoConfirmationPage } from './register-form-photo-confirmation.page';

describe('RegisterFormPhotoConfirmationPage', () => {
  let component: RegisterFormPhotoConfirmationPage;
  let fixture: ComponentFixture<RegisterFormPhotoConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormPhotoConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormPhotoConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
