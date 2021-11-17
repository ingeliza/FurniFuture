import { DataTypes } from 'sequelize';

export default function(sequelize) {
    return sequelize.define('User', {
            email: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }, 
            password: {
                type: Sequelize.TEXT,
                allowNull: false
            }, 
            company: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            archivedAt: {
                type: Sequelize.DATE,
            }
        }, {
           hooks: {
               beforeValidate: (account, options) => {
                   if(!account.company) account.company = false;
               }
               
           }
        });
}