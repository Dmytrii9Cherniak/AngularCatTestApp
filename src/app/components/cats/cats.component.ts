import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor(private catService: CatService) {
  }

  ngOnInit():void {
    this.catService.getAllBreedsCategories().subscribe(value => {
      console.log(value)
    })
  }

}
