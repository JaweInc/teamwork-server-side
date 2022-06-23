import { Router } from 'express';
import Homepage from '../controllers/homepage';
import CreateUser from '../controllers/admin/CreateUser';
import AdminSigin from '../controllers/admin/SignIn'
import EmployeeSignin from '../controllers/employee/Signin';

const api = Router();
api.get('/', Homepage);
api.post('/create-user', CreateUser);
api.post('/auth/admin/signin', AdminSigin);
api.post('/auth/employee/signin', EmployeeSignin);

export default api;
