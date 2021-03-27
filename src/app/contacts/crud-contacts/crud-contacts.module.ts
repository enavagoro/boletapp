import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudContactsPageRoutingModule } from './crud-contacts-routing.module';

import { CrudContactsPage } from './crud-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudContactsPageRoutingModule
  ],
  declarations: [CrudContactsPage]
})
export class CrudContactsPageModule {}
