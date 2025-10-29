import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
    {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m: { routes: Routes }) => m.routes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './routes').then((m: { routes: Routes }) => m.routes),
  },
];
