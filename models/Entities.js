module.exports = (sequelize, type) => {
    return sequelize.define('Entities', {
        EntityTypeId: {
          type: type.INTEGER,
          primaryKey: true,
          unique:true

        },
        EntityTypeId:{
            type : type.INTEGER
          },

        EntityValue:{
            type : type.STRING //ARRAY?
        },

        // Synonyms: {
        //     type : type.ARRAY(type.STRING)
        //   },

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
        
        Kind:{
            type : type.STRING
          },

          SessionId: {
            type: type.UUID,
            unique:true
  
          },

        EntityTypeDisplayName:{
            type : type.STRING
        },
        
        EntityOverrideMode:{
            type : type.BOOLEAN
        },
    })

}