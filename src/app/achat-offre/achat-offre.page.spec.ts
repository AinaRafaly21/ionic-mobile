import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchatOffrePage } from './achat-offre.page';

describe('AchatOffrePage', () => {
  let component: AchatOffrePage;
  let fixture: ComponentFixture<AchatOffrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatOffrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchatOffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
