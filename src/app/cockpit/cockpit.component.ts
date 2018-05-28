import { Component, OnInit , EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

    // newServerName = "";
    // newServerContent = "";
    @ViewChild('serverContentInput') serverContentInput: ElementRef;
    @ViewChild('serverNameInput') serverNameInput: ElementRef;

    ngOnInit(){

    }

    onAddServer(serverNameInput){
        console.log('**',serverNameInput);
      this.serverCreated.emit({
          serverName: serverNameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
      })
  }

    onAddBlueprint(serverNameInput){
        console.log('**',serverNameInput);
      this.blueprintCreated.emit({
          serverName: serverNameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
      })
  }
}
