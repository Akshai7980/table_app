import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const baseUrl: string =
  'https://app.legaciestechno.com/aks_project2/api/get_data_logic.php';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMethod() {
    const apiPath: string =
      '?type=list_dynamic_table_list_ts_senario&table=Master_Company_Table&userid=1&senario=M1_1';
    return this.http.get(baseUrl + apiPath);
  }
}
