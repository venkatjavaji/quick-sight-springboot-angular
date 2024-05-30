import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuicksightEmbedComponent } from './quicksight-embed/quicksight-embed.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './services/safeurl.pipe';
import { AppRoutingModule } from './app-routing.module';
import { QuickSightConsoleComponent } from './quick-sight-console/quick-sight-console.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuicksightEmbedComponent,
    SafeUrlPipe,
    QuickSightConsoleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
