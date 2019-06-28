import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public todo;
  public src = `https://source.unsplash.com/400x300/?todo`
  public blank_todo = {
    name: 'Blank',
    message: 'Create a new todo',
    time: '00:00'
  }
  constructor(private ds: DataProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ds.getTodo(this.route.snapshot.params['id']).subscribe(data => {
      this.todo = data
      // this.todo = this.blank_todo
    })
  }

}
