module.exports = (sequelize, DataTypes) => {

    const House = sequelize.define('House', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Number is already in use!'
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                // example on how to add relations
                House.hasMany(models.Student, { foreignKeyConstraint: true });
            }
        }
    });

    return House;
};