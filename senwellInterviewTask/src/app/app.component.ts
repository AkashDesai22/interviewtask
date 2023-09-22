import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'senwellInterviewTask';

 getAllData:any;
 distinctData:any;
 endPoint:string="userData";

  constructor(public Service:DataServiceService){};

   ngOnInit(){

    this.Service.getUserData(this.endPoint).subscribe((resp)=>{
      this.getAllData=resp;
      const nameCount=this.getAllData.reduce((acc:any,curr:any)=>{
        if(acc[curr.name]){
          acc[curr.name]++;
        }else{
          acc[curr.name]=1;
        }return acc;
      },{});
      this.distinctData=Object.keys(nameCount).map(name=>{
        return {name:name,count:nameCount[name]};
      });
    });
    
  }


}
