import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  products: any;

  constructor(private apiService: ApiService){

  }
  
  ngOnInit(): void {
    this.getProductList();
  }

  // * api call to get the list
  getProductList(){
    this.apiService.getListOfPorducts().subscribe((res) => {
      console.log("Products List------->", res);
      this.products = res;
    });
  }

}
