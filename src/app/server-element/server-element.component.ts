import { Component, OnInit, Input ,ViewEncapsulation, SimpleChanges ,DoCheck} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
    @Input('srvElement') element : {type: string, name: string, content: string};
    @Input() name: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
      // console.log(changes);
  }

  ngOnInit() {
  }

}
