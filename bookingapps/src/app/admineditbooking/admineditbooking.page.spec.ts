import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmineditbookingPage } from './admineditbooking.page';

describe('AdmineditbookingPage', () => {
  let component: AdmineditbookingPage;
  let fixture: ComponentFixture<AdmineditbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmineditbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
