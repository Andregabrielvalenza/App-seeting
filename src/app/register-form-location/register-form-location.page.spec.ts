import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFormLocationPage } from './register-form-location.page';

describe('RegisterFormLocationPage', () => {
  let component: RegisterFormLocationPage;
  let fixture: ComponentFixture<RegisterFormLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
