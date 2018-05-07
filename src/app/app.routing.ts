import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { HelpComponent } from './components/help/help.component';





const routes: Routes = [
    { path: '', component: ViewComponent },
    { path: 'view', component: ViewComponent },
    { path: 'help', component: HelpComponent },    
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }