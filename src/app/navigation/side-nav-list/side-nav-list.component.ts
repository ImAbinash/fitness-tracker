import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthSerice } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Output() sideNavCloseEvent = new EventEmitter<void>();
  isAuth: boolean = false;

  constructor(private authService: AuthSerice) {}

  ngOnInit(): void {
    this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }
  sideNavClose() {
    this.sideNavCloseEvent.emit();
  }
  logout(){
    this.sideNavCloseEvent.emit();
    this.authService.logout();
  }

}
