import { Router } from 'express';

import AuthMiddleware from '@middlewares/authMiddleware';
import TenantController from '@controllers/v1/TenantController';

const tenantRouter = Router();

tenantRouter.use(AuthMiddleware);

tenantRouter.post('/', TenantController.store);
tenantRouter.get('/:id', TenantController.show);
tenantRouter.get('/', TenantController.index);
tenantRouter.patch('/:id', TenantController.update);
tenantRouter.delete('/:id', TenantController.destroy);

export default tenantRouter;
