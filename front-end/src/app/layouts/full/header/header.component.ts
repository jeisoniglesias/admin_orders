import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  inject,
  computed,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/pages/authentication/services/api/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog) {}
  private authService = inject(LoginService);
  public user = computed(() => this.authService.currentUser());

  onLogout() {
    this.authService.logout();
  }
}
