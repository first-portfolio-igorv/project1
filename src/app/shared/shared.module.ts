import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';


const MATERIAL = [
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule,MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [...MATERIAL],
  exports:[...MATERIAL],  
  providers: [],
})
export class SharedModule {}
