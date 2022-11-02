module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    id_email: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: DataTypes.INTEGER,
    email: DataTypes.STRING,

  },
  {
    timestamps: false,
    tableName: 'email_usuario',
  });

  Email.associate = (models) => {
    Email.hasOne(models.User, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  };
  return Email;
};
