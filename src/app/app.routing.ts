import{ ModuleWithProviders } from '@angular/core'
import{ Routes, RouterModule} from '@angular/router'

import{ HomeComponent
        ,ListPageComponent
        ,AboutusComponent
        ,EditdataComponent
        ,CreateComponent  } from './'
const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'pages',component:ListPageComponent},
    {path:'pages/create',component:CreateComponent},
    {path:'pages/:id',component:EditdataComponent},
    {path:'about',component:AboutusComponent},
    
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);