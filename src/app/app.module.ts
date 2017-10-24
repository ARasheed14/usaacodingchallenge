import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Components

import { FoodsListComponent } from "./foods/foods-list/foods-list.component";
import { FoodsDetailComponent } from "./foods/foods-detail/foods-detail.component";

// Services

import { FoodsServiceProvider } from '../providers/foods-service/foods-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { ErrorHandlingServiceProvider } from '../providers/error-handling-service/error-handling-service';
import { LoggerServiceProvider } from '../providers/logger-service/logger-service';

@NgModule({
  declarations: [
    MyApp,
    FoodsListComponent,
    FoodsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoodsListComponent,
    FoodsDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodsServiceProvider,
    StorageServiceProvider,
    ErrorHandlingServiceProvider,
    LoggerServiceProvider
  ]
})
export class AppModule {}
