import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFormValidateUserVerifiedPage } from './register-form-validate-user-verified.page';

describe('RegisterFormValidateUserVerifiedPage', () => {
  let component: RegisterFormValidateUserVerifiedPage;
  let fixture: ComponentFixture<RegisterFormValidateUserVerifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormValidateUserVerifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormValidateUserVerifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
