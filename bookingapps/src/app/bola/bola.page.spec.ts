import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BolaPage } from './bola.page';

describe('BolaPage', () => {
  let component: BolaPage;
  let fixture: ComponentFixture<BolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
