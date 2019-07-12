module.exports = (sequelize, type) => {
    return sequelize.define('KnowledgeBase', {
        KnowledgeBaseId: {
          type: type.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique:true
        },
        ProjectId: {
          type: type.STRING,
          primaryKey: true,
          autoIncrement: false,
          unique: true,
          foreignKey: true,
          references:{
            model:'agents',
            Key:'ProjectId',
          }
        
        },
        displayName:{
          type : type.STRING
        },
        
        KnowledgeBaseFull: {
          type : type.STRING
        }
    })

}

