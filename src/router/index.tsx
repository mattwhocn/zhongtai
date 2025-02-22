import { RouteObject } from 'react-router-dom';
import Business from '../pages/Business';
import TechBusiness from '../pages/Business/Tech';
import SecurityBusiness from '../pages/Business/Security';
import TrainingBusiness from '../pages/Business/Training';

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
        path: 'training',
        element: <TrainingBusiness />,
      },
    ],
  },
]; 