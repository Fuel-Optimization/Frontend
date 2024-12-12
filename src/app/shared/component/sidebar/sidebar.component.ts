import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() pageSelect = new EventEmitter<string>();

  isCollapsed = true;

  onMenuClick(pageTitle: string) {
    this.pageSelect.emit(pageTitle);
  }

  toggleSidebar(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
}
