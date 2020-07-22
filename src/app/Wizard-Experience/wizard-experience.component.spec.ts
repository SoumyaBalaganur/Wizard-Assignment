import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardExperienceComponent } from './wizard-experience.component';

describe('WizardExperienceComponent', () => {
  let component: WizardExperienceComponent;
  let fixture: ComponentFixture<WizardExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
