module.exports = (sequelize, type) => {
    return sequelize.define('KnowlegeBase', {
        KnowledgeBaseId: {
          type: type.INTEGER,
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
            model:'agent',
            Key:'ProjectId',
          }
        
        },
        displayName:{
          type : type.STRING
        },
        
        KnowledgeBaseFullName1: {
          type : type.STRING
        }
    })

}
