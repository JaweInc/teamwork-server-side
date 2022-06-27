import { Router } from 'express';
import Auths from '../middleware/Auths';
import Homepage from '../controllers/homepage';
import CreateUser from '../controllers/admin/CreateUser';
import AdminSigin from '../controllers/admin/SignIn'
import EmployeeSignin from '../controllers/employee/auth/Signin';
import CreateGif from '../controllers/employee/modules/CreateGif';
import CreateArticle from '../controllers/employee/modules/CreateArticle';

const api = Router();
api.get('/', Homepage);
api.post('/create-user', CreateUser);
api.post('/auth/admin/signin', AdminSigin);
api.post('/auth/employee/signin', EmployeeSignin);
api.post('/createGif', Auths, CreateGif);
api.post('/createArticle', Auths, CreateArticle);

export default api;
