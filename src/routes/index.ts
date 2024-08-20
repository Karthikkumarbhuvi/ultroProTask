import { lazy } from 'react';
const Security = lazy(() => import('../pages/Security'));
const coreRoutes = [
  
  {
    path: '/security',
    title: 'Security',
    component: Security,
  },
 
  
];

const routes = [...coreRoutes];
export default routes;
