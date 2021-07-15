import Sequelize, { Model } from 'sequelize';

class Processo extends Model {
    static init(sequelize){
        super.init(
            {
                empresa: Sequelize.STRING,
                tipoprocesso: Sequelize.STRING,
                numeroprocesso: Sequelize.STRING,
                encerrado_em: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );
        return this;
    }
    
    static associate(models){
        this.belongsTo(models.Paciente, { foreignKey: 'paciente_id', as: 'paciente' });
    }

}

export default Processo;