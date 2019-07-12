module.exports = (sequelize, type) => {
    return sequelize.define('agent', {
        AgentId: {
          type: type.INTEGER,
          //primaryKey: true,
          autoIncrement: true,
          unique:true
        },
        ProjectId: {
          type: type.STRING,
          primaryKey: true,
          autoIncrement: false,
          unique: true
        },
        displayName:{
          type : type.STRING,
          allowNull: false
        }
    })

}