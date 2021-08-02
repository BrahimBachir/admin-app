export class Product {

    constructor (
        public id: number,
        public title: string,
        public description: string,
        public price: number
    ) { }
}

/* LO DE ARRIBA ES LO MISMO QUE LO DE ABAJO: SHORT-CUT */
/*export class Product {
    id: string;
    title: string;
    description: string;
    price: number;

    constructor (id: string,title: string,description: string, price: number) {
        this. id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}*/