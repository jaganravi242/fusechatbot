import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';
import { BotviewComponent } from './botview/botview.component';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  dialogRef: MatDialogRef<unknown, any>;

  constructor(
    private _matDialog: MatDialog
  ) {

   }

  ngOnInit(): void {
  }
  botView(): void
    {
        this.dialogRef = this._matDialog.open(BotviewComponent, {
            panelClass: 'event-form-dialog'
        });
    }
}