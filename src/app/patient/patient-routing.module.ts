import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientListComponent } from './patient-list/patient-list.component';
import { LayoutComponent } from '../shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'patient', component:  LayoutComponent, children: [
      { path: '', redirectTo: 'patient-list', pathMatch: 'full' },
      { path: 'patient-list', component: PatientListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
