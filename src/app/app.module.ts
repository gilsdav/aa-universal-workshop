import { NgModule, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, makeStateKey, TransferState } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { isPlatformServer } from '@angular/common';

// bootstrap
import { AppComponent } from './containers/app/app.component';
import { MetadataService } from './services/metadata/metadata.service';
import { environment } from '../environments/environment';

const CONFIG_KEY = makeStateKey<{
  baseServiceUrl: string
}>('config');

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
export class AppModule {
  constructor(
    @Optional() @Inject('CONFIG') config,
    @Inject(PLATFORM_ID) platformId,
    transferState: TransferState
    ) {
    const isServer = isPlatformServer(platformId);

    let mainConfig: any;

    if (isServer) {
      mainConfig = config;
      transferState.onSerialize(CONFIG_KEY, () => mainConfig);
    } else {
      mainConfig = transferState.get(CONFIG_KEY, null);
    }

    if (mainConfig) {
      if (mainConfig.baseServiceUrl) {
        environment.baseUrl = mainConfig.baseServiceUrl;
      }
    }

  }
}
