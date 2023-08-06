import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/types/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product!: Iproduct
  form = this.fb.group({
    name: [""],
    price: [0],
    image: [""],
    quality: [0],
    description: [""]
  })
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private ac: ActivatedRoute
  ) {
    this.ac.paramMap.subscribe(data => {
      const id = data.get("id")
      this.productService.getOneproduct(id).subscribe({
        next: (value) => {
          this.product = value
          this.form.patchValue(this.product)
        }
      })
    })
  }
  onsubmit() {
    this.productService.editproduct({ id: this.product.id, ...this.form.value }).subscribe({
      next: () => {
        alert("Sửa thành công")
        this.router.navigate([''])
      }
    })
  }
}

