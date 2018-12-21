import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, 
  MatCardModule, MatMenuModule, MatGridListModule,
  MatSelectModule, MatCheckboxModule} from '@angular/material';
import { NavMainComponent } from './nav-main/nav-main.component';
import { TableMainComponent } from './table-main/table-main.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MainDialogComponent } from './main-dialog/main-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { ChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardMainComponent },
  { path: 'table-main', component: TableMainComponent },
  { path: 'table-filter', component: TableFilterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    TableMainComponent,
    DashboardMainComponent,
    MainDialogComponent,
    TableFilterComponent
  ],
  entryComponents: [
    MainDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatCheckboxModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
