module.exports = (sequelize, type) => {
    return sequelize.define('KnowlegeBase', {
        DocumentId: {
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

        KnowledgeBaseFullName: {
            type: type.STRING,
            primaryKey: true,
            autoIncrement: false,
            unique: true,
            foreignKey: true,
            references:{
              model:'KnowledgeBase',
              Key:'KnowledgeBaseFullName1',
            }
          },

        DisplayName:{
          type : type.STRING
        },
        
        DocumnetName: {
          type : type.STRING
        },
        DocumnetPath: {
            type : type.STRING
        },
        KnowledgeTypes: {
            type : type.STRING
        },
        MimeType: {
            type : type.STRING
        }
    })

}