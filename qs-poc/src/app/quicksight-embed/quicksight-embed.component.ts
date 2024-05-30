import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import * as QuicksightEmbedding from 'amazon-quicksight-embedding-sdk';
import { createEmbeddingContext, EmbeddingContext, EmbeddingContextFrameOptions } from 'amazon-quicksight-embedding-sdk';
import { HttpClient } from '@angular/common/http';
import { QuicksightService } from '../services/quicksight.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-quicksight-embed',
  templateUrl: './quicksight-embed.component.html',
  styleUrls: ['./quicksight-embed.component.css']
})
export class QuicksightEmbedComponent implements OnInit {
  constructor(private quickSightService: QuicksightService, private sharedService: SharedService) { }

  loadingError = false;
  dashboard: any;
  selectedValue: any;


  ngOnInit() {
    this.sharedService.selectedValue$.subscribe(value => {
      this.selectedValue = value;
      this.GetDashboardURL(this.selectedValue);

    });


  }


  public GetDashboardURL(selectedValue: any) {

    this.quickSightService.getEmbedUrl(selectedValue)
      .subscribe({
        next: (data: any) => this.Dashboard(data),
        error: () => this.loadingError = true
      });
  }

  public async Dashboard(embeddedURL: string) {
    const containerDiv = document.getElementById("dashboardContainer");
    if (containerDiv) {
      const frameOptions = {
        url: embeddedURL,
        container: containerDiv,
        height: "850px",
        width: "100%",
        resizeHeightOnSizeChangedEvent: true,
      };
      const embeddingContext = await createEmbeddingContext();
      this.dashboard = embeddingContext.embedDashboard(frameOptions);
    } else {
      console.error('Container element not found');
    }
  }
}
