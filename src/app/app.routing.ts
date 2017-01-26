import{ ModuleWithProviders } from '@angular/core'
import{ Routes, RouterModule} from '@angular/router'

import{ HomeComponent
        ,ListPageComponent
        ,AboutusComponent  } from './'
const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'pages',component:ListPageComponent},
    {path:'about',component:AboutusComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);