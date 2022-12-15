export interface IProduct {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number
    images: Array<string>
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}
export interface IData {
    limit: number
    products: Array<IProduct>
    skip: number
    total: number
}
export interface IOptions {
    groupBy: Array<number>
    groupDesc: Array<number>
    itemsPerPage: number
    multiSort: boolean
    mustSort: boolean
    page: number
    sortBy: Array<number>
    sortDesc: Array<number>
  }