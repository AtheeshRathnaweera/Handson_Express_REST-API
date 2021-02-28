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
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        }


    }, {
        classMethods: {
            associate: (models) => {
                // example on how to add relations
                Student.belongsTo(models.House, {foreignKeyConstraint: true });
            }
        }
    });

    return Student;
};