import { NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}


