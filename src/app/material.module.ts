import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

const MaterialComponents = [
  MatSelectModule
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
