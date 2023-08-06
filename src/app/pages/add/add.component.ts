import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
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
    private router: Router
  ) { }
  onsubmit() {
    this.productService.addproduct(this.form.value).subscribe({
      next: () => {
        alert("Thêm thành công")
        this.router.navigate([""])
      }
    })
  }
}
