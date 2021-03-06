import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [{ type: 'server', name:'TestServer', content: 'Just a test,haha'}];
    interval;
    value : number = 0;
    onServerAdded(serverData: { serverName: string, serverContent: string}){
        console.log('SV',this.serverElements)
        this.serverElements.push({
            type:'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}){
        console.log('BP',this.serverElements)
        this.serverElements.push({
            type: 'blueprint',
            name: blueprintData.serverName,
            content: blueprintData.serverContent
        })
    }
    onchangeFirst(){
        this.serverElements[0].name = "Change!!"
    }
    odds = [1,3,5];
    evens = [2,4,6];
    OnlyOdd = false;
    onStart(){
        this.interval = setInterval(()=>{
            this.value++;
            console.log(this.value)
        },1000)
    }
    onStop(){
        clearInterval(this.interval)
    }
}
