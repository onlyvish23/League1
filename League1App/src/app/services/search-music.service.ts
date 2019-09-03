import { Injectable } from '@angular/core';
import { SearchItem } from '../entities/search-item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMusicService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
      const promise = new Promise((resolve, reject) => {
        const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.http.get(apiURL)
                  .toPromise()
                  .then((res: any) => {
                    if (res !== undefined && res.results !== undefined) {
                    this.results = res.results.map(item => {
                        return new SearchItem(item.trackName,
                          item.artistName,
                          item.trackViewUrl,
                          item.artworkUrl30,
                          item.artistId);
                    });
                    resolve(this.results);
                  } else {
                    console.log('Result is undefined');
                  }
                  })
                  .catch(msg => {
                    reject(msg);
                  });
      });
      return promise;
  }   // End of search

}

