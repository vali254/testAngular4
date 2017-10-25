import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddNewButton = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  usernameValue: string ='';
  canResetUsername = false;

  displayDetailsValue: string = 'This is the text to be toggled for the Display Button!';
  toggledValueForDisplayButton = false;
  logData: any[] = [];

  constructor() {

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  onUpdateUsername(event: Event){
    //  tmpValue = (<HTMLInputElement>event.target).value;
      if((<HTMLInputElement>event.target).value == '') {
          this.canResetUsername = false;
        }else{
          this.canResetUsername = true;
        }
  }

  onResetUsername(){
    if(  this.canResetUsername == true){
      this.usernameValue = '';
      this.canResetUsername = false;
    }
  }

  getColor(rowIndex){
    return rowIndex > 5 ? 'blue' : 'white';
  }

  changeToogledValue(){
    this.toggledValueForDisplayButton = !this.toggledValueForDisplayButton;
    var noElements = this.logData.length;
    console.log('noElements - ',noElements);
    noElements++;
    this.logData.push(noElements);

  }

}
