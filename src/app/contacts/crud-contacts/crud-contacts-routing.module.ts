import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudContactsPage } from './crud-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: CrudContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudContactsPageRoutingModule {}
