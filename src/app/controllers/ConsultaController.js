import User from '../schemas/User';

class ConsultaController{
    async index(req, res){
       const user = await User.find().sort({createdAt:'desc'}).limit(20);
       console.log(Object.keys(user).length);
       let arrayTrapezoidal = [];
       if(user){
           for(var i = 0; i < Object.keys(user).length; i++){
               let valoresIdoso  = [ user[i].age,20,30,50,60];
               let valoresAdulto = [ user[i].age,50,60,80,90];
               let calculo_1 = (valoresIdoso[0] - valoresIdoso[1]) / (valoresIdoso[2] - valoresIdoso[1]);
               let calculo_2 = (valoresIdoso[4] - valoresIdoso[0]) / (valoresIdoso[4] - valoresIdoso[3]);
               //let calculo_1 = (valoresAdulto[0] - valoresAdulto[1]) / (valoresAdulto[2] - valoresAdulto[1]);
               //let calculo_2 = (valoresAdulto[4] - valoresAdulto[0]) / (valoresAdulto[4] - valoresAdulto[3]);
               let calculotrapezoidal = Math.max(Math.min(calculo_1,1,calculo_2),0);
               //arrayTrapezoidal.push(calculotrapezoidal);
               if(calculotrapezoidal < 0.6 ){
                    user.splice(i, 1);
               }
           }
       }
       return res.json(user);
    }

    async update(req, res){
        //const notification = await Notification.findById(req.params.id);

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        return res.json(user);
    }

    async trapezoidal(user, res){
        let arrayTrapezoidal = [];
        if(user){
            for(let i = 0; i <= user.lenght; i++){
                let valoresIdoso  = [ user[i].age,20,30,50,60];
                let valoresAdulto = [ user[i].age,50,60,80,90];
                //let calculo_1 = (valoresIdoso[0] - valoresIdoso[1]) / (valoresIdoso[2] - valoresIdoso[1]);
                //let calculo_2 = (valoresIdoso[4] - valoresIdoso[0]) / (valoresIdoso[4] - valoresIdoso[3]);
                let calculo_1 = (valoresAdulto[0] - valoresAdulto[1]) / (valoresAdulto[2] - valoresAdulto[1]);
                let calculo_2 = (valoresAdulto[4] - valoresAdulto[0]) / (valoresAdulto[4] - valoresAdulto[3]);
                let calculotrapezoidal = Math.max(Math.min(calculo_1,1,calculo_2),0);
                arrayTrapezoidal.push(calculotrapezoidal);
                
            }
        }
        return res.json({ resultado: arrayTrapezoidal });
    }
}

export default new ConsultaController();