import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  allData: any[] = [];
  tableHeader!: string[];
  searchTerm: string = '';
  searchResult: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.apiService.getMethod().subscribe(
      (res: any) => {
        console.log(res);
        
        if (res && res.all_data) {
          this.allData = res.all_data;
          // this.searchResult = res.all_data;

          this.allData.forEach((element: any) => {
            element.stringLength = element.Master_Company_Name.length;

            if (element.Remarks !== null) {
              this.searchResult.push(element);
            }
          });

          this.tableHeader = Object.getOwnPropertyNames(this.allData[0]);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onInput(event: any) {
    if (event || event.target.value !== '' || event.target.value) {
      const searchTerm = event.target.value;

      this.searchResult = this.allData.filter((item) =>
        item.Master_Company_Name.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
      );
    }
  }
}
