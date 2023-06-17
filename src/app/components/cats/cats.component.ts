import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { map, Observable } from 'rxjs';
import { BreedModel } from '../../models/breed.model';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public page: number = 0;
  public hasNextPage: Observable<boolean>;

  constructor(
    private catService: CatService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      imageItems: [this.imageItemsPerPage[1]],
      selectedBreed: ['']
    });
    this.breedsList = this.catService.getAllBreedsList(this.page);
    this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value);
    this.hasNextPage = this.catService.getAllBreedsList(this.page + 1).pipe(
      map((breeds: BreedModel[]) :boolean => breeds.length > 0)
    );
  }

  public getImageItemsField() {
    return this.form.get('imageItems');
  }

  public getBreedFormField() {
    return this.form.get('selectedBreed');
  }

  public filterCats(isReset?: boolean): void {
    const selectedBreed = this.getBreedFormField()?.value;
    if (selectedBreed && !isReset) {
      this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value, selectedBreed);
    } else if (isReset) {
      this.getBreedFormField()?.setValue(null);
      console.log(this.getBreedFormField()?.value)
      this.imagesList = this.catService.getAllCatsImages(this.getImageItemsField()?.value);
    }
  }

  public navigatePage(direction: string): void {
    this.page += direction === 'previous' ? -1 : 1;
    this.breedsList = this.catService.getAllBreedsList(this.page);
    this.hasNextPage = this.catService.getAllBreedsList(this.page + 1).pipe(
      map((breeds: BreedModel[]) :boolean => breeds.length > 0)
    )
  }

}
