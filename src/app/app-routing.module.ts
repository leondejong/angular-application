import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { OverviewComponent } from './overview/overview.component'
import { DetailComponent } from './detail/detail.component'
import { EditComponent } from './edit/edit.component'
import { NotFoundComponent } from './elements/not-found.component'

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
