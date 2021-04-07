import { Component, OnInit } from '@angular/core';
import { ModalController ,ToastController, AlertController,ActionSheetController} from '@ionic/angular';
import { ConfirmationPage } from './confirmation/confirmation.page';
import { DataStorageService } from '../_services/dataStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  logList= "";
  current= "";
  answer= "";
  operatorClicked= true;
  serviceCalculator = true;

  constructor(private modalCtrl : ModalController, private dataStorage: DataStorageService, private router:Router) { }

  ngOnInit() {
    var val = this.dataStorage.get('user');
    if(val){
      console.log('este es el val',val);
    }
    else{
      this.router.navigate(['/login'], {replaceUrl: true});
    }
  }

  append(number) {
    if (this.operatorClicked) {
      this.current = "";
      this.operatorClicked = false;
    }
    //this.animateNumber(`n${number}`);
    this.current = `${this.current}${number}`;
  };

  addtoLog(operator) {
    if (this.operatorClicked == false) {
      this.logList += `${this.current} ${operator} `;
      this.current = "";
      this.operatorClicked = true;
    }
  };
/*
  animateNumber(number) {
    let tl = anime.timeline({
      targets: `#${number}`,
      duration: 250,
      easing: "easeInOutCubic"
    });
    tl.add({ backgroundColor: "#c1e3ff" });
    tl.add({ backgroundColor: "#f4faff" });
  };

  
  animateOperator(operator) {
    let tl = anime.timeline({
      targets: `#${operator}`,
      duration: 250,
      easing: "easeInOutCubic"
    });
    tl.add({ backgroundColor: "#a6daff" });
    tl.add({ backgroundColor: "#d9efff" });
  };*/

  clear() {
   // this.animateOperator("clear");
    this.current = "";
    this.answer = "";
    this.logList = "";
    this.operatorClicked = false;
  };

  sign() {
  //  this.animateOperator("sign");
    if (this.current != "") {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    }
  };

  percent() {
    //this.animateOperator("percent");
    if (this.current != "") {
      this.current = `${parseFloat(this.current) / 100}`;
    }
  };

  dot() {
    //this.animateNumber("dot");
    if (this.current.indexOf(".") === -1) {
      this.append(".");
    }
  };

  divide() {
    //this.animateOperator("divide");
    this.addtoLog("/");
  };

  times() {
    //this.animateOperator("times");
    this.addtoLog("*");
  };

  minus() {
    //this.animateOperator("minus");
    this.addtoLog("-");
  };

  plus() {
    //this.animateOperator("plus");
    this.addtoLog("+");
  };

  equal() {
    //this.animateOperator("equal");
    if (this.operatorClicked == false) {
      this.answer = eval(this.logList + this.current);
    } else {
      this.answer = "Error";
    }
  }
 
  /* confirm bill */

  /* aqui deberian ir las validaciones de la boleta antes de que pase a confirmar*/
  confirmBill(){
    if(this.answer != "Error"){
      this.openConfirmBill(this.answer)
    }else{
      
    }
  
  }

  async openConfirmBill(answer) {
    const modal = await this.modalCtrl.create({
      component: ConfirmationPage,
      cssClass: 'modals',
      componentProps:{
        'value' : answer,
      }
    });

    modal.onDidDismiss().then(modal=>{
      console.log("haciendo pruebas");
      this.ngOnInit();
    });

    return await modal.present();
  }
}
