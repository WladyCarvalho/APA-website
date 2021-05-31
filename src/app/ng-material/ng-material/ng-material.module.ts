import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTooltipModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule
  ],
  exports:[
    CommonModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTableModule
  ]

})
export class NgMaterialModule { }
