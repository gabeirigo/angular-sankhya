import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare let $;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  color: 'success';

  @Input()
  timeOut = 3000;

  @ViewChild('divAlert')
  divAlert: ElementRef;

  constructor() { }

  ngOnInit() {

    if(this.timeOut) {
      setTimeout(() => {
        $(this.divAlert.nativeElement).alert('close');
      }, this.timeOut);
    }

  }

}
