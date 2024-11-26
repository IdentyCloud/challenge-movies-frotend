import { Routes } from '@angular/router';
import { unifiedAuthGuard } from './guards/validate.guard';

export const routes: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./core/main/main.component').then(m => m.MainComponent),
        canActivate: [unifiedAuthGuard],
    },
    {
        path: '',
        loadComponent: () => import('./auth/auth/auth.component').then(m => m.AuthComponent),
        canActivate: [unifiedAuthGuard],
    },
    {
        path: '**',
        redirectTo: '',
    }
];