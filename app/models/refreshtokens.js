module.exports = (sequelize, DataTypes) => {

    const RefreshTokens = sequelize.define('RefreshTokens', {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true
        },
        access_token_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_used: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_invalidate: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        expiry_date: {
            type: DataTypes.DATE,
            allowNull: false
        }


    }, {
        classMethods: {
            associate: (models) => {
                // example on how to add relations
                RefreshTokens.belongsTo(models.Student, { foreignKeyConstraint: true });
            }
        }
    });

    return RefreshTokens;
};