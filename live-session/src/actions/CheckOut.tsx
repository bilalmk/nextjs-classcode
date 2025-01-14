import { client } from "@/sanity/lib/client";
import { Customer } from "@/types/customer.js";
import { Product } from "@/types/product.js";

const CreateCustomerInSanity = async (customerInfo:Customer)=>
{
    try{
    const customerObject = {
        _type:"customer",
        name:customerInfo.name,
        email:customerInfo.email,
        phone:customerInfo.phone
    }

    const response = await client.create(customerObject)
    console.log("user created in sanity",response)
    return response
    }
    catch(error)
    {
        console.log("error created user in sanity",error)
        throw error
    }
}

const CreateOrderInSanity = async (cartData:Product[], customer_id:string)=>
    {
        try
        {
            const orderObject = {
                _type:"order",
                customer:{
                    _type:"reference",
                    _ref:customer_id
                },
                items:cartData.map((item:Product)=>(
                    {
                        _type:"items",
                        _id : item._id,
                        product_name:item.name,
                        product_description:item.description,
                        product_price:item.price,
                        quantity:1
                    }
                )),
                order_date:new Date().toISOString()
            }
        
            const response = await client.create(orderObject)
            console.log("order created in sanity",response)
            return response
        }   
        catch(error)
        {
            console.log("error created order in sanity",error)
            throw error
        }
    }
export default async function CheckOut(cartData:Product[], customerInformation:Customer) {
    try{
        const customer = await CreateCustomerInSanity(customerInformation)
        await CreateOrderInSanity(cartData,customer._id)
        console.log("checkout completed")
    }
    catch(error)
    {
        console.log("error created order and customer in sanity",error)
        throw error 
    }
}