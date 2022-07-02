import About from "../pages/About";
import Comments from "../pages/Comments";
import Comment from "../pages/Comment";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/login', element: Comments},
    {path: '/comments', element: Comments},
    {path: '/comments/:id', element: Comment},
    {path: '/error', element: NotFound}
];

export const publicRoutes = [
    {path: '/about', element: About},
    {path: '/login', element: Login},
    {path: '/comments', element: Login},
    {path: '/comments/:id', element: Login},
    {path: '/error', element: NotFound}
];
