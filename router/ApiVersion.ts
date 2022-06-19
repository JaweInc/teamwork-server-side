import { Router } from 'express';
import Homepage from '../controllers/homepage';
import CreateUser from '../controllers/admin/CreateUser';

const api = Router();
api.get('/', Homepage);
api.post('/create-user', CreateUser);

export default api;
