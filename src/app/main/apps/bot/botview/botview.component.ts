import { Component, OnInit } from '@angular/core';
import { Interactions } from 'aws-amplify';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-botview',
  templateUrl: './botview.component.html',
  styleUrls: ['./botview.component.scss']
})
export class BotviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    setTimeout(Message,3000);   
    setInterval(refresh,270000);
  }
}
 	
function refresh() {
    window .location.reload();
}
function Message() {
  var response = Interactions.send("crmbot","user is e1150f26-d8f5-11e8-9840-000d3a1106c2 organisation is e11103ca-d8f5-11e8-9840-000d3a1106c2");
  console.log(response);
}