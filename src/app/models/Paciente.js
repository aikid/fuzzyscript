import Sequelize, { Model } from 'sequelize';

class Paciente extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                cpf: Sequelize.STRING,
                rg: Sequelize.STRING,
                idade: Sequelize.INTEGER,
                email: Sequelize.STRING,
                responsavel: Sequelize.STRING,
                endereco: Sequelize.STRING,
                numero: Sequelize.INTEGER,
                apartamento: Sequelize.INTEGER,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                cep: Sequelize.STRING,
                telefone: Sequelize.STRING,
                celular: Sequelize.STRING,
                convenio: Sequelize.STRING,
                contrato: Sequelize.STRING,
                produto: Sequelize.STRING,
                plano: Sequelize.STRING,
                categoria: Sequelize.STRING,
                acomodacao: Sequelize.STRING,
                acesso: Sequelize.STRING,
                login: Sequelize.STRING,
                password: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        // this.addHook('beforeSave',async user=>{
        //     if(user.password){
        //         user.password_hash = await bcrypt.hash(user.password, 8)
        //     }
        // });
        return this;
    }

    // static associate(models){
    //     this.belongsTo(models.File, { foreignKey: 'file_id', as: 'arquivos' });
    // }
}

export default Paciente;