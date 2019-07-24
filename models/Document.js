module.exports = (sequelize, type) => {
    return sequelize.define('Document', {
        DocumentId: {
          type: type.INTEGER,
          autoIncrement:true,
          primaryKey: true,
          unique:true
        },
        ProjectId: {
          type: type.STRING,
          autoIncrement: false,
          primaryKey:true,
          unique: true,
          foreignKey: true,
          references : {
            model:'agents',
            Key:'ProjectId'
          }
        
        },

        KnowledgeBaseFullNameId: {
            type: type.STRING,
            //primaryKey: true,
            autoIncrement: false,
            unique: true,
            foreignKey: true,
            references:{
              model:'KnowledgeBases',
              Key:'KnowledgeBaseFullNameId',
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