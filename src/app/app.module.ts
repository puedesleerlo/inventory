import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { AppRoutingModule } from './app.routing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './shared/http-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
    SharedModule,
    ShellModule,
    AppRoutingModule
  ],
  providers: [DataService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
