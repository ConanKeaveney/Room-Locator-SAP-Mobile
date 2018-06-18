import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatersidePage } from './waterside';

@NgModule({
  declarations: [
    WatersidePage,
  ],
  imports: [
    IonicPageModule.forChild(WatersidePage),
  ],
})
export class WatersidePageModule {}
