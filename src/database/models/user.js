module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        displayName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false
        });

        User.associate = (models) => {
            User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPost' })
        }

    return User;
};
