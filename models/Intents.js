module.exports = (sequelize, type) => {
    return sequelize.define('Intents', {
        IntentId: {
        type: type.INTEGER,
         primaryKey: true,
         autoIncrement: true,
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
        displayName:{
          type : type.STRING
        },
        
        // TrainingPharsesParts: {
        //   type : type.ARRAY(type.STRING)
        // },

        MessageTexts:{
            type : type.STRING
          }
    })

}