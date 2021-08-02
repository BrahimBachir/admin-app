import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.services';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    @Get()
    getTests(): Product[] {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string): Product {
        return this.productService.getProduct(Number(id));
    }

    @Patch(':id')
    patchProduct(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
    ): Product {
        return this.productService.patchProduct(Number(id), title, description, price);
    }

    @Post()
    insertProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
    ): Product {
        return this.productService.insertProduct(title,description,price);
    }
}
