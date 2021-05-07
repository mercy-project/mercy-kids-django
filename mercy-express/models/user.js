import Sequelize from 'sequelize';

export default (sequelize, dataTypes) => {
    return sequelize.define('user', {
        email: {
            type: Sequelize.STRING(32),
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING(10),
            allowNull: false,
            unique: false
        },
        nickname: {
            type: Sequelize.STRING(10),
            allowNull: false,
            unique: true
        },
        birthdate: {
            type: Sequelize.DATE,
            allowNull: false,
            unique: false
        },
        activation_code: {
            type: Sequelize.STRING(32),
            allowNull: false,
            unique: true
        }
    }, {
        timestamp: true,
        // paranoid: true
    });
};