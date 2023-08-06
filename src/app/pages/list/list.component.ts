import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/types/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products!: Iproduct[]
  constructor(private productService: ProductService) {
    this.productService.getAllproduct().subscribe({
      next: (data) => {
        this.products = data
      }
    })
  }
  onremove(id: any) {
    const thongbao = confirm("Chắc chắn muốn xóa chưa")
    if (!thongbao) return
    this.productService.removeproduct(id).subscribe({
      next: () => {
        alert("Xóa thành công")
      }
    })
  }
}
