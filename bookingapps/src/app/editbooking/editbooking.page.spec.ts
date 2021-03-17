import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditbookingPage } from './editbooking.page';

describe('EditbookingPage', () => {
  let component: EditbookingPage;
  let fixture: ComponentFixture<EditbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
