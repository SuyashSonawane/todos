import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public name;
  public message;
  public priority;

  submit() {
    this.ds.addTodo(this.name, this.message)
    this.router.navigate(['/'])
  }

  constructor(private ds: DataProviderService, private router: Router) { }

}
