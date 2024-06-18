import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import AppRouting from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({
    declarations:[LoginComponent, HomeComponent],
    imports:[
        BrowserModule,
        AppRouting
    ],
    providers:[],
})
export default class AppModule{

}