import bcrypt from 'bcrypt';
import jwtGenerator from '../../utils/Authorization';
import db from '../../orm/orm';

const CreateUser = async (req: any, res: any) => {
  const { firstname, lastname, email, password, gender, jobrole, department, address } = req.body;
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(password, salt);

  try {
    console.log("1")
    const checkUser = await db.selectAll('employee', {email})
    console.log("2")
    //console.log(checkUser)
    if (checkUser.rows.length === 0) {
      console.log("3")
      const insertUser = await db.create('employee', {
        firstname, lastname, email, password: bcryptPassword, gender, jobrole, department, address
      });
      console.log("4")

      const token = jwtGenerator(insertUser.rows[0].id);
      console.log("5");

      if (!insertUser) {
        console.log('There is no user');
        return res.status(400).json({
          status: 'error',
          message: 'Ops! Cannot create user account',
        });
      }
      console.log("6")
      return res.status(200).json({
        status: 'success',
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
