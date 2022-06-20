import bcrypt from 'bcrypt';
import jwtGenerator from '../../utils/Authorization';
import db from '../../orm/orm';

const CreateUser = async (req: any, res: any) => {
  const { firstname, lastname, email, password, gender, jobrole, department, address } = req.body;
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(password, salt);

  try {
    const checkUser = await db.selectAll('employee', {email})
    if (checkUser?.rows?.length === 0) {
      const insertUser = await db.create('employee', {
        firstname, lastname, email, password: bcryptPassword, gender, jobrole, department, address
      });

      const token = jwtGenerator(insertUser?.rows?.[0]?.id);

      if (!insertUser) {
        console.log('There is no user');
        return res.status(400).json({
          status: 'error',
          message: 'Ops! Cannot create user account',
        });
      }
      return res.status(200).json({
        status: 'success',
        token,
        message: 'User account successfully created',
      });
    }
    return res.status(400).json({
      status: 'error',
      message: 'User already exist',
    });
  } catch {
    return res.status(400).json({
      status: 'error',
      message: 'Ops! something went wrong',
    });
  }
};

export default CreateUser;
