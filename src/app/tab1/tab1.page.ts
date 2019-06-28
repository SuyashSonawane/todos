import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todos;

  clicked(id) {
    this.router.navigate([id])
  }
  remove(id) {
    this.dataservice.removeItem(id)
  }
  constructor(private dataservice: DataProviderService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getItems().subscribe((data) => {
      this.todos = data
      // console.log(this.todos)
      // console.log(new Date())
    })
  }

}
