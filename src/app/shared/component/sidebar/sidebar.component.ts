import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() pageSelect = new EventEmitter<string>();

  isCollapsed = true;


    constructor(private router: Router) {}

  onMenuClick(pageTitle: string) {
    this.pageSelect.emit(pageTitle);
  }

  toggleSidebar(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
  navigateToDriversTable(){
    this.router.navigate([`/drivers`]);
  }

  activeLink: string = '';

  setActive(link: string) {
    this.activeLink = link;
  }


}
