module.exports = (sequelize, DataTypes) => {
  const Cell = sequelize.define('Cell', {
    id_celular: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: DataTypes.INTEGER,
    celular: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'celular_usuario',
  });

  Cell.associate = (models) => {
    Cell.hasOne(models.User, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  };

  return Cell;
};
