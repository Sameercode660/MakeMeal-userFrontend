import axios from 'axios'

export async function categoryWiseDataFetching(category: string) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/productByCategory`, {category: category})
        console.log(response)

        return response
    } catch (error) {
        console.log(error)
        return error
    }
}