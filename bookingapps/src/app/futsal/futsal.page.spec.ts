import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FutsalPage } from './futsal.page';

describe('FutsalPage', () => {
  let component: FutsalPage;
  let fixture: ComponentFixture<FutsalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutsalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FutsalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
