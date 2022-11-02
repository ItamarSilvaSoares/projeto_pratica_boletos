module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    senha: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'usuarios',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Cell, {
      foreignKey: 'id_usuario',
      as: 'celulares',
    });
    User.hasMany(models.Email, {
      foreignKey: 'id_usuario',
      as: 'emails',
    });
    User.hasMany(models.Billet, {
      foreignKey: 'id_usuario',
      as: 'boletos',
    });
  };


  return User;
};
