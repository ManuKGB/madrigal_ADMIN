import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UpdateComponent } from './update/update.component';
import { InfosRoutingModule } from './infos-routing.module';


const COMPONENTS: any[] = [
  UpdateComponent
];
const COMPONENTS_DYNAMIC: any[] = [];


@NgModule({
  imports: [
    CommonModule,SharedModule,InfosRoutingModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, UpdateComponent],
})
export class InfosModule { }
