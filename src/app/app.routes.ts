import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        redirectTo:"/home",
        pathMatch:"full"
     },
    {
       path: "home",
       component: HomeComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export default  class AppRouting{

}
