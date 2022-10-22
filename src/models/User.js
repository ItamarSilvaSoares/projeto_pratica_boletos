module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
  },
  {
    timesTamps: false,
    tableName: 'usuarios'
  });

  return User;
}