import Order from "../models/orderModel.js";

//Create New Order
//POST request
// -->  api/orders
//Private Route

export const createOrder = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body;

        // Check if order items exist
        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: "No order items" });
        }

        // Create the order
        const order = new Order({
            user: req.user._id, // Add the user ID from the authenticated user
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: "Error creating order", error: error.message });
    }
}

//get My Orders
//GET request
//-->  api/orders/myorders
//Private route

export const getMyOrders=async(req,res)=>{
    
    const orders=await Order.find({user:req.user._id});
    res.status(200).json(orders)
}

//get My Order by Id
//GET request
//-->  api/orders/
//Private route

export const getOrderById=async()=>{
    const order= await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.status(200).json(order)
    }else{
        res.status(404).json({message:"Order not Found"})
    }
}