import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public disable: boolean = false;
}
