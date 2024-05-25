const routes: Routes = [
    {
      path: 'main',
      loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule),
      children: [
        {
          path: 'galeria',
          loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
        }
      ]
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }
  ];