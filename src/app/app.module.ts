import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// bootstrap
import { AppComponent } from './containers/app/app.component';
import { MetadataService } from './services/metadata/metadata.service';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    loadChildren: '../products/products.module#ProductsModule',
  },
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [MetadataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
