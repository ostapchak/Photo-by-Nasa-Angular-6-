import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PhotosService } from './photos.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule,MatGridListModule, MatDialogModule} from '@angular/material';
import { ModalComponent, ModalWindowComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent],
  entryComponents: [ModalWindowComponent, ModalComponent]
})
export class AppModule { }
