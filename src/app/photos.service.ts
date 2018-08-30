import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PhotosService {
    constructor(private http: Http) {}

    getPhotos() {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
    }
}
