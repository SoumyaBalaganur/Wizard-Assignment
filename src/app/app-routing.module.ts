import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperinceComponent } from './work-experince/work-experince.component';
import { WizardExperienceComponent } from './wizard-experience/wizard-Experience.component';



const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "step-1", component: PersonalDetailsComponent },
  { path: "step-2", component: ContactDetailsComponent },
  { path: "step-3", component: SkillsComponent },
  { path: "step-4", component: WorkExperinceComponent },
  { path: "wizard-finished", component: WizardExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
