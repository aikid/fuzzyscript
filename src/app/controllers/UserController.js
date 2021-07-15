import * as Yup from 'yup';
import User from '../schemas/User';


class UserController{
    async store(req,res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            age: Yup.number().required(),
            size: Yup.number().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Ocorreu um erro na validação dos dados tente novamente' });
        }

        await User.create({
            name: `${req.body.name}`,
            age:`${req.body.age}`,
            size: `${req.body.size}`,
        });
        return res.json({ msg:'Usuario Inserido com Sucesso' });
    }

    async update(req, res){
        
    }

    async trapezoidal(req, res){
        let valoresIdoso  = [52,20,30,50,60];
        let valoresAdulto = [52,50,60,80,90];
        //let calculo_1 = (valoresIdoso[0] - valoresIdoso[1]) / (valoresIdoso[2] - valoresIdoso[1]);
        //let calculo_2 = (valoresIdoso[4] - valoresIdoso[0]) / (valoresIdoso[4] - valoresIdoso[3]);
        let calculo_1 = (valoresAdulto[0] - valoresAdulto[1]) / (valoresAdulto[2] - valoresAdulto[1]);
        let calculo_2 = (valoresAdulto[4] - valoresAdulto[0]) / (valoresAdulto[4] - valoresAdulto[3]);
        let calculotrapezoidal = Math.max(Math.min(calculo_1,1,calculo_2),0);
        return res.json({ resultado: calculotrapezoidal });
    }

    async index(req,res){
        const users = await User.findAll({
            attributes: ['id','name','email','file_id'],
            include:[{
                model: File,
                as:'arquivos',
                attributes: ['name','path','url','type'],
            }],
        });
        return res.json({ users });
    }
}

export default new UserController();