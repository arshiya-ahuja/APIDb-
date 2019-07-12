module.exports = (sequelize, type) => {
    return sequelize.define('Document', {
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
            model:'agents',
            Key:'ProjectId',
          }
        },

        KnowledgeBaseFull: {
            type: type.STRING,
            primaryKey: true,
            autoIncrement: false,
            unique: true,
            foreignKey: true,
            references:{
              model:'KnowledgeBases',
              Key:'KnowledgeBaseFull',
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