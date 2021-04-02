import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  doc = "https://drive.google.com/file/d/1wmQvtbZKyF-DsiBjBTHs1ZQFtx9-z4ih/view";

  constructor() { }

  ngOnInit() {
    var tabs = document.querySelector('ion-tab-bar');
    tabs.hidden = true;
  }

}
