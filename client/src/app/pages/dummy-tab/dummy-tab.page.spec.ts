import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DummyTabPage } from './dummy-tab.page';

describe('DummyTabPage', () => {
  let component: DummyTabPage;
  let fixture: ComponentFixture<DummyTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DummyTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
