import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button'

const MaterialComponents: MatSelectModule[] = [
  MatButtonModule,
  MatChipsModule,
  MatSelectModule,
  MatProgressSpinnerModule,
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
