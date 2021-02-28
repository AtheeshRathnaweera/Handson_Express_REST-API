module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define('Student', {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email is already in use with another account!'
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        classMethods: {
            associate: (models) => {
                // example on how to add relations
                Student.belongsTo(models.House, { foreignKeyConstraint: true });
                Student.hasMany(models.RefreshTokens, { foreignKeyConstraint: true });
            }
        }
    });

    return Student;
};