import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPreguntdasRegistroPage } from './new-preguntdas-registro.page';

describe('NewPreguntdasRegistroPage', () => {
  let component: NewPreguntdasRegistroPage;
  let fixture: ComponentFixture<NewPreguntdasRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPreguntdasRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPreguntdasRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
