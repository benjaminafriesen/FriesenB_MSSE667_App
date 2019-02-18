import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import { Receipt } from '../../models/Receipt';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent implements OnInit {
  receipts: Receipt[];
  
  constructor(private receiptService: ReceiptService) { }

  ngOnInit() {
    this.receiptService.getReceipts().subscribe(receipts =>
      console.log(this.receipts)
    )
  }

}
