import { NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];
    private idIndex: number = 1;

    insertProduct(title: string, description: string, price: number): Product {
        const newProduct = new Product(this.idIndex, title, description, price);
        this.products.push(newProduct);
        this.idIndex++;
        return newProduct;
    }

    getProducts(): Product[] {
        return [...this.products];
    }

    getProduct(id: number){
        const product = this.findProduct(id)[0]; 
        return {...product};
    }

    patchProduct(id: number, title: string, description: string, price: number): Product{
        const [product, index] = this.findProduct(id);
        const updateProduct = {...product};

        if(title){
            updateProduct.title = title;
        }
        if(description){
            updateProduct.description = description;
        }
        if(price){
            updateProduct.price = price;
        }
        
        this.products[index] = updateProduct;

        return updateProduct;
    }

    private findProduct (id: number): [Product, number] {
        const index = this.products.findIndex((product) => product.id === id);
        const product = this.products[index];
        if(!product) {
            throw new NotFoundException(`No product with ID = ${id} has been found!`)
        }
        return [product, index];
    }
}