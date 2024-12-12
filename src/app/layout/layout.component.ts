import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  currentPageTitle: string = 'Dashboard';

  isSidebarCollapsed = false;
  isSidebarOpen: boolean = false;

  
  updateTitle(newTitle: string) {
    this.currentPageTitle = newTitle;
  }
  
  toggleSidebar(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }
}
