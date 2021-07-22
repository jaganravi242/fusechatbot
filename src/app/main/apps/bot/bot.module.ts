import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot.component';
import { RouterModule,Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import Amplify from "aws-amplify";
import awsconfig from "../../../../aws-exports";
import { BotviewComponent } from './botview/botview.component';
Amplify.configure(awsconfig);

const routes: Routes = [
  {
      path: '**',
      component: BotComponent,
      children: [],
  }
];
@NgModule({
  declarations: [BotComponent, BotviewComponent],
  imports: [
    CommonModule,
    AmplifyUIAngularModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents: [
    BotviewComponent
]
})
export class BotModule { }
