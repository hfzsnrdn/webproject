import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquirymPage } from './enquirym.page';

describe('EnquirymPage', () => {
  let component: EnquirymPage;
  let fixture: ComponentFixture<EnquirymPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirymPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquirymPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
