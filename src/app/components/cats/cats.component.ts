import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Observable } from 'rxjs';
import { BreedModel } from '../../models/breed.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ImageModel } from '../../models/image.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  public imageItemsPerPage: number[] = [5, 10, 15, 20];
  public form: FormGroup;
  public breedsList: Observable<BreedModel[]>;
  public imagesList: Observable<ImageModel[]>;

  constructor(
    private catService: CatService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      imageItems: new FormControl(this.imageItemsPerPage[1]),
      selectedCategory: new FormControl('')
    });
    this.breedsList = this.catService.getAllBreedsList(this.getCategoryFormField()?.value);
    this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value);
  }

  public getImageItemsField() {
    return this.form.get('imageItems');
  }

  public getCategoryFormField() {
    return this.form.get('selectedCategory');
  }

  public changeCount(): void {
    const category: string = this.getCategoryFormField()?.value;
    if (category !== 'reset' && category) {
      this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value, category);
    } else {
      this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value);
    }
  }
}
