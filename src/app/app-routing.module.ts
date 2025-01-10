import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent as AppHeader } from './components/header/header.component';
import { HeaderComponent as CustomHeader } from '../customizations/components/header/header.component';

const routes: Routes = [
  { path: 'default', component: AppHeader },
  { path: 'custom', component: CustomHeader },
  { path: '**', redirectTo: 'custom' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}