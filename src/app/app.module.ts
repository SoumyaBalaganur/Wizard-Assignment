import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardExperienceComponent } from './wizard-experience/wizard-Experience.component';
import { WorkExperinceComponent } from './work-experince/work-experince.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    PersonalDetailsComponent,
    SkillsComponent,
    WelcomeComponent,
    WorkExperinceComponent,
    WizardExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
