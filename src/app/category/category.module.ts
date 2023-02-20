import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { MaterialsModule } from '../shared/materials.module';
import { CategoryCreateComponent } from './category-create/category-create.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryCreateComponent],
  imports: [CommonModule, CategoryRoutingModule, MaterialsModule],
})
export class CategoryModule {}