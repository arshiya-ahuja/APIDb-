module.exports = (sequelize, type) => {
    return sequelize.define('KnowlegeBase', {
        ContextId: {
          type: type.INTEGER,
          primaryKey: true,
          unique:true

        },

        SessionId: {
            type: type.UUID,
            unique:true,
            foreignKey: true,
            references:{
              model:'entities',
              Key:'SessionId',
            }
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
        
        LifespanCount: {
        type:type.INTEGER
        }
    })

}

