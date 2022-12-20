import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ConvertComponent } from "./components/convert/convert.component";

const appRoutes: Routes = [
    {path: '', component: ConvertComponent},
    {path: '**', component: ConvertComponent}
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);