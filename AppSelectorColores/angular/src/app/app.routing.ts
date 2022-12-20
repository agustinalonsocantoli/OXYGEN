import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SelectorComponent } from "./components/selector/selector.component";

const appRoutes: Routes = [
    {path: "", component: SelectorComponent},
    {path: "**", component: SelectorComponent}
]

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);