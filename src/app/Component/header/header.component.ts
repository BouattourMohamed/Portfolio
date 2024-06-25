import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavListVisible = false;

  toggleNavList() {
    this.isNavListVisible = !this.isNavListVisible;
  }
}
