import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { NavItem } from './nav-item/nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  private navItems = navItems;
  public menu: NavItem[] = [];
  constructor(public navService: NavService) {}

  ngOnInit(): void {
    this.menu = this.navItems;
  }
}
