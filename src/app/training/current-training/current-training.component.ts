import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  progress: number;
  timer: any;
  @Output() exitOnGoingTrainingEvent = new EventEmitter();

  constructor(private dialog: MatDialog) {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.progressTimer();
  }

  progressTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 2;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }


  stopCurrentTraining() {
    console.log("Training need to stop");
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exitOnGoingTrainingEvent.emit();
      } else {
        this.progressTimer();
      }
    });
  }

}
