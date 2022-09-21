import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfosService {
  private infoGetUrl = 'https://testsymfapp.herokuapp.com/api/informations';

  private infoUpdateUrl = 'https://testsymfapp.herokuapp.com/api/informations/update/1';

  constructor(private http: HttpClient) { }

  getInfos() {
    return this.http.get(this.infoGetUrl);
  }

  updateInfos(data: any) {
    return this.http.put(this.infoUpdateUrl, data);
  }
}
