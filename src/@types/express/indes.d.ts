import * as core from "express-serve-static-core"
import { UserDto } from "../../auth/authLogic.ts"

declare global {
    namespace Express {
        interface Request {
            user?: UserDto
        }
    }
}