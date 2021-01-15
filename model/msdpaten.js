const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msdpaten = sequelize.define("dpaten", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_paten: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nik: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}  ,
{
    freezeTableName: true,
});

// force: true will drop the table if it already exists
msdpaten.sync({ force: false }).then(() => {
    // Table created
    // return mspaten.create({
    //     name: 'admin',
    //     password: 'admin',
    //     email : 'imamsatrianta@gmail.com'
    // });
});
module.exports = msdpaten;

