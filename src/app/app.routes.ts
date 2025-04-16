import { Routes } from '@angular/router';
import { DashboardComponent } from './features/Dashboard/dashboard/dashboard.component';
import { SettingsComponent } from './features/Master/settings/settings.component';
export const routes: Routes = [
    
        {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'settings',
            component: SettingsComponent,
          },
   
];
