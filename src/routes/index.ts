import { Router } from "express";
// import CategoryRoutes from "./category.routes"

import { authRouter } from "../auth/authRouter.ts";
import { categoryRouter } from "../category/categoryRouter.ts";
import { orderRouter } from "../order/orderRouter.ts";
const router = Router();


router.use('/category', categoryRouter)
router.use('/auth', authRouter)
router.use('/order',orderRouter)




export default router