import axios from "axios";

interface ArgumentTypes {
    productId: string
    userId: string | null
    quantity: number
}

export async function handleItemsToCart({productId, userId, quantity}: ArgumentTypes) {
    try {
        const data: ArgumentTypes = {
            productId,
            userId,
            quantity
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/cart/addProduct`, data)

        console.log(response)

        return response

    } catch (error) {
        console.log(error)
        alert('Unable to add the product')
    }
}