import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewResgitroPage } from './new-resgitro.page';

describe('NewResgitroPage', () => {
  let component: NewResgitroPage;
  let fixture: ComponentFixture<NewResgitroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResgitroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewResgitroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
