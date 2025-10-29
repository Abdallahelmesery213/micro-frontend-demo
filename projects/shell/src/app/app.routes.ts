import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './routes',
      }).then(m => m.MFE_HOME_ROUTES),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfe2',
        exposedModule: './routes',
      }).then(m => m.MFE_HOME_ROUTES),
  },
];
