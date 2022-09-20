import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfosService {
  private infoGetUrl = 'http://localhost:8000/api/informations';

  private infoUpdateUrl = 'http://localhost:8000/api/informations/update/1';

  constructor(private http: HttpClient) { }

  getInfos() {
    return this.http.get(this.infoGetUrl);
  }

  updateInfos(data: any) {
    return this.http.put(this.infoUpdateUrl, data);
  }
}
