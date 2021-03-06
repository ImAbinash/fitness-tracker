import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthSerice } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sideNavToggleEvent = new EventEmitter<void>();
  isAuth: boolean = false;
  authServiceSubscription!: Subscription;

  constructor(private authService: AuthSerice) { }

  ngOnInit(): void {
    this.authServiceSubscription = this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }
  sideNavToggle() {
    this.sideNavToggleEvent.emit();
  }
  logout(){
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authServiceSubscription.unsubscribe();
  }



}
