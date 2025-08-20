import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './students/student-list.component';
import { StudentFormComponent } from './students/student-form.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'new', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
