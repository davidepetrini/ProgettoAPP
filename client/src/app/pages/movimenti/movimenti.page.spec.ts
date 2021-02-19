import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovimentiPage } from './movimenti.page';

describe('MovimentiPage', () => {
  let component: MovimentiPage;
  let fixture: ComponentFixture<MovimentiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovimentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
