const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msdmerek = sequelize.define("dmerek", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_merek: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    nik: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}  ,
{
    freezeTableName: true,
});

// force: true will drop the table if it already exists
msdmerek.sync({ force: false }).then(() => {
    // Table created
    // return mspaten.create({
    //     name: 'admin',
    //     password: 'admin',
    //     email : 'imamsatrianta@gmail.com'
    // });
});
module.exports = msdmerek;

