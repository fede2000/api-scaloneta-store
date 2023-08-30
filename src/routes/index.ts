import { Router } from "express";
// import CategoryRoutes from "./category.routes"
import AuthRoutes from "./Auth.routes"
import { authRouter } from "../auth/authRouter";
import { categoryRouter } from "../category/categoryRouter";
import { orderRouter } from "../order/orderRouter";
const router = Router();


router.use('/category', categoryRouter)
router.use('/auth', authRouter)
router.use('/order',orderRouter)




export default router