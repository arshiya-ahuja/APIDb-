module.exports = (sequelize, type) => {
    return sequelize.define('agents', {
        AgentId: {
          type: type.INTEGER,
          primaryKey: true,
          unique:true
        },
        ProjectId: {
          type: type.STRING,
          primaryKey: true,
          autoIncrement: false,
          unique: true
        },
        displayName:{
          type : type.STRING
        }
    })

}