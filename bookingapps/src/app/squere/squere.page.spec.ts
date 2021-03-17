import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SquerePage } from './squere.page';

describe('SquerePage', () => {
  let component: SquerePage;
  let fixture: ComponentFixture<SquerePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquerePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SquerePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
