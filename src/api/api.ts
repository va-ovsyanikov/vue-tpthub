import axios from 'axios'
import { IProduct, IData } from '@/types/types';
//1
// export const fetchAll = async (page:number, itemsPerPage:number): Promise<IData> => {
//     const response = await axios.get(`https://dummyjson.com/products?skip=${page}&limit=${itemsPerPage}`)
//     return response.data
// }

//2
export const fetchAll = async (): Promise<IData> => {
    const response = await axios.get('https://dummyjson.com/products?skip=5&limit=40')
    return response.data
}

export const fetchOne = async (id: string): Promise<IProduct> => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    return response.data
}


