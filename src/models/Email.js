module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    id_email: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
  },
  {
    timesTamps: false,
    tableName: 'emails',
  });

  return Email;
};
