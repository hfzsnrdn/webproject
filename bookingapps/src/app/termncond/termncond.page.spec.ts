import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermncondPage } from './termncond.page';

describe('TermncondPage', () => {
  let component: TermncondPage;
  let fixture: ComponentFixture<TermncondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermncondPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermncondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
