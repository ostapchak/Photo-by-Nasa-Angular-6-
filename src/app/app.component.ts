import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  photos = [];
  constructor(private photosService: PhotosService) {}
  ngOnInit() {
      this.photosService
        .getPhotos()
        .subscribe((response: Response) => {
          const data = response.json();
          this.photos = data.photos;
          console.log(this.photos);
         });
  }

  randomPrice(item) {
    let price: number;
    price = 50 - 0.5 + Math.random() * (2600 - 50 + 1);
    price = Math.round(price);
    item.price = price;
    return price;
  }

  deleteItem(index) {
    this.photos.splice(index , 1);
  }

  sortByName() {
    function mySort(a, b) {
      if (a.camera.name > b.camera.name) {return 1; } else {return -1; }
    }
    this.photos.sort(mySort);
  }

  sortByPrice() {
    function compareNumeric(a, b) {
      return a.price - b.price;
    }
    this.photos.sort(compareNumeric);
    console.log(this.photos);
  }
}
