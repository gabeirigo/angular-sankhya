import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  marginText = "none";

  constructor() { }

  ngOnInit() {
  }

}
