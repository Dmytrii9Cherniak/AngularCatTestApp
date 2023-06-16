import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service'
import { Observable } from 'rxjs';
import { BreedModel } from '../../models/breed.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  public form: FormGroup;
  public breedsList: Observable<BreedModel[]>;

  constructor(private catService: CatService, private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      selectedCategory: new FormControl('')
    });
    this.breedsList = this.catService.getAllBreedsList();
    this.catService.getAllBreedsList().subscribe(value => {
      console.log(value)
    })
  }

  public filterImages(): void {
    console.log(this.form.controls['selectedCategory'].value)
  }

}
