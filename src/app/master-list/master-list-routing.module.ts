import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterListPage } from './master-list.page';

const routes: Routes = [
  {
    path: '',
    component: MasterListPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterListPageRoutingModule {}
