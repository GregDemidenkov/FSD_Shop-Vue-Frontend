import { CartPage } from '@pages/cart'
import { CatalogPage } from '@pages/catalog'
import { LoginPage } from '@pages/login'
import { RegistrationPage } from '@pages/registration'
import config from '@shared/routes/config'


export const routes = [
    {
        path: config.catalog,
        component: CatalogPage
    },
    {
        path: config.cart,
        component: CartPage
    },
    {
        path: config.login,
        component: LoginPage
    },
    {
        path: config.registration,
        component: RegistrationPage
    },
    {
        path: "/:catchAll(.*)",
        component: CatalogPage
    },
]