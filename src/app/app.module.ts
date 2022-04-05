import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { ApiService } from './api/api.service'
import { InMemDataService } from './api/list.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'
import { OverviewComponent } from './overview/overview.component'
import { EntryComponent } from './entry/entry.component'
import { DetailComponent } from './detail/detail.component'
import { EditComponent } from './edit/edit.component'

import { ButtonComponent } from './elements/button.component'
import { InputTextComponent } from './elements/input-text.component'
import { TextareaComponent } from './elements/textarea.component'
import { NotFoundComponent } from './elements/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OverviewComponent,
    EntryComponent,
    DetailComponent,
    EditComponent,
    ButtonComponent,
    InputTextComponent,
    TextareaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
