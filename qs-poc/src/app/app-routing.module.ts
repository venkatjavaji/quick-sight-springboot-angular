import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuicksightEmbedComponent } from './quicksight-embed/quicksight-embed.component';
import { QuickSightConsoleComponent } from './quick-sight-console/quick-sight-console.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: QuicksightEmbedComponent },
  { path: 'console', component: QuickSightConsoleComponent },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
