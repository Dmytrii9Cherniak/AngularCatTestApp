import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialComponents: MatSelectModule[] = [
  MatSelectModule,
  MatProgressSpinnerModule,
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
