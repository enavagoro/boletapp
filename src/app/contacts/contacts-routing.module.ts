import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: 'crud-contacts',
    loadChildren: () => import('./crud-contacts/crud-contacts.module').then( m => m.CrudContactsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
