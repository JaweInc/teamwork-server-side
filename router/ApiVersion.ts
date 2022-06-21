import { Router } from 'express';
import Homepage from '../controllers/homepage';
import CreateUser from '../controllers/admin/CreateUser';
import AdminSigin from '../controllers/admin/SignIn'

const api = Router();
api.get('/', Homepage);
api.post('/create-user', CreateUser);
api.post('/admin-signin', AdminSigin);

export default api;
