import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-stop-training',
    template: `
    <h2 mat-dialog-title>Are you sure?</h2>
    <mat-dialog-content>You already got progress: {{progress}}%</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
    `
})

export class StopTrainingComponent { 
    progress:any;
    constructor( @Inject(MAT_DIALOG_DATA) public data: any){
        this.progress = data.progress;
    }
}