import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoncenterPage } from './personcenter';

@NgModule({
  declarations: [
    PersoncenterPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoncenterPage),
  ],
})
export class PersoncenterPageModule {}
