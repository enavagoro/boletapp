import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../_services/dataStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  
  constructor(private dataStorage: DataStorageService,private router:Router,) { }

  ngOnInit() {
    console.log('entré');
    
    var val = this.dataStorage.get('user');

    if(val){
      console.log('este es el val',val);
    }
    else{
      this.router.navigate(['/login'], {replaceUrl: true});
    }
  }

}
