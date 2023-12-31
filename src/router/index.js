import { createRouter, createWebHistory } from "vue-router";
import Body from '../components/Body'
import Login from '../components/Login'
import Book from "@/components/Book";
import Books from "@/components/Books";
import BooksAdmin from "@/components/BooksAdmin";
import BookEdit from "@/components/BookEdit";
import Users from "@/components/Users";
import UserEdit from "@/components/UserEdit";
import Security from "@/components/security";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
	{
		path: '/books',
		name: 'Books',
		component: Books,
	},
	{
		path: '/books/:bookName',
		name: 'Book',
		component: Book,
	},
	{
		path: '/admin/books',
		name: 'BooksAdmin',
		component: BooksAdmin,
	},
	{
		path: '/admin/books/:bookId',
		name: 'BookEdit',
		component: BookEdit,
	},
	{
		path: '/admin/users',
		name: 'Users',
		component: Users,
	},
	{
		path: '/admin/users/:userId',
		name: 'User',
		component: UserEdit,
	}
]

const router = createRouter({history: createWebHistory(), routes});
router.beforeEach(() => {
	Security.checkToken();
})

export default router;