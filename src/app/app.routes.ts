import { Routes } from '@angular/router';
import { NewPurchaseComponent } from './Pages/new-purchase/new-purchase.component';
import { NewSaleComponent } from './Pages/new-sale/new-sale.component';
import path from 'path';
import { PurchaseListComponent } from './Pages/purchase-list/purchase-list.component';
import { SaleListComponent } from './Pages/sale-list/sale-list.component';
import { StockComponent } from './Pages/stock/stock.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { authAdminGuard } from './services/auth-admin.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'layout',
        component:LayoutComponent,
        // canActivate:[authAdminGuard],
        children:[
            {
                path:'purchase-list',
                component:PurchaseListComponent,
                children:[
                    {
                        path:'new-purchase',
                        component:NewPurchaseComponent
                    }
                ]
            },
            {
                path:'sale-list',
                component:SaleListComponent,
                children:[
                    {
                        path:'new-sale',
                        component:NewSaleComponent
                    }
                ]
            },
            {
                path:'stock',
                component:StockComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            }
        ]
    }
    
];
