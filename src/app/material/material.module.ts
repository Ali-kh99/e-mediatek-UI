import { NgModule } from '@angular/core';
import { MatRippleModule, MatButtonModule, MatAutocompleteModule, MatError, MatLabel, MatHint, MatInputModule, MatFormFieldModule } from '@angular/material';

const MaterialComponets = [
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatButtonModule
];

@NgModule({
  imports: [
    MaterialComponets
  ],
  exports: [
    MaterialComponets
  ]
})
export class MaterialModule { }
