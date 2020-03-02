import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksPageComponent } from './Components/tasks-page/tasks-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ExcelService } from './Services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
  TasksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
