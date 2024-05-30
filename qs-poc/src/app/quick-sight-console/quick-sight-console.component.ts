import { Component, OnInit } from '@angular/core';
import { QuicksightService } from '../services/quicksight.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-quick-sight-console',
  templateUrl: './quick-sight-console.component.html',
  styleUrls: ['./quick-sight-console.component.css']
})
export class QuickSightConsoleComponent implements OnInit {

  quickSightConsoleEmbedUrl: any;
  loadingError = false;
  selectedValue: any;

  constructor(private quickSightService: QuicksightService, private sharedService: SharedService) {
    this.selectedValue = 'default';
  }

  ngOnInit(): void {
    this.sharedService.selectedValue$.subscribe(value => {
      this.selectedValue = value;
      this.quickSightService.getQSConsoleEmbedUrl(this.selectedValue).subscribe({
        next: (data: any) => {
          this.quickSightConsoleEmbedUrl = data;
          console.log(this.quickSightConsoleEmbedUrl);
        }, error: (data: any) => {
          console.log("error occurred..." + data);
          this.loadingError = true;
        }
      })
    });

  }

}
