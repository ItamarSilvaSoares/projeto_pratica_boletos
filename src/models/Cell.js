module.exports = (sequelize, DataTypes) => {
  const Cell = sequelize.define('Cell', {
    id_celular: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    celular: DataTypes.STRING,
  },
  {
    timesTamps: false,
    tableName: 'celulares',
  });

  return Cell;
};
