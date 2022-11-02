module.exports = (sequelize, DataTypes) => {
  const Billet = sequelize.define('Billet', {
    id_boleto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    vencimento: DataTypes.DATE,
    id_descricao: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
  },
  {
    timestamps: false,
    tableName: 'boletos',
  });

  Billet.associate = (models) => {
    Billet.hasOne(models.User, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  };

  return Billet;
};
