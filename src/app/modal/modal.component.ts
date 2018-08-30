import { Component,  Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  description: any;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  @Input() photoItem;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
    data: {description: this.photoItem.camera.full_name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {this.photoItem.camera.full_name = result; } else {return; }
    });
  }
}

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal.component.window.html'
})
export class ModalWindowComponent {

 constructor(
  public dialogRef: MatDialogRef<ModalWindowComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

   onCancelClick(): void {
    this.dialogRef.close();
  }

}
