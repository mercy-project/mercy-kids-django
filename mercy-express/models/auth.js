import Sequelize from 'sequelize';

export default (sequelize, dataTypes) => {
    return sequelize.define('default_auth', {
        user: {},
        password: {
            type: Sequelize.STRING(32),
            allowNull: false,
            unique: true
        },
    });
};