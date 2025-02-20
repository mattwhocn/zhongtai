import { RouteObject } from 'react-router-dom';
import Business from '../pages/Business';
import TechBusiness from '../pages/Business/Tech';
import SecurityBusiness from '../pages/Business/Security';
import FireTraining from '../pages/Business/FireTraining';

const routes: RouteObject[] = [
  // ... 其他路由
  {
    path: '/business',
    element: <Business />,
    children: [
      {
        path: 'tech',
        element: <TechBusiness />,
      },
      {
        path: 'security',
        element: <SecurityBusiness />,
      },
      {
        path: 'fire-training',
        element: <FireTraining />,
      },
    ],
  },
]; 