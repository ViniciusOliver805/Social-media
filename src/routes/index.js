import userRoutes from './user.routes'
import postRoutes from "./post.routes"

const routes = app => {
    userRoutes(app)
    postRoutes(app)
}

export default routes