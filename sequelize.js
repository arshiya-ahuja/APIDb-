const Sequelize = require('sequelize')
const AgentModel = require('./models/Agent')
const IntentsModel = require('./models/Intents')
const EntitiesModel = require('./models/Entities')
 const ContextModel = require('./models/Context')
const KnowledgeBaseModel = require('./models/KnowledgeBase')
const DocumentModel = require('./models/Document')


//check username and password 
const sequelize = new Sequelize('DialogFlowAPI', 'root', 'Arshiya2004', { 
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Agent = AgentModel(sequelize, Sequelize)
 const Intents = IntentsModel(sequelize, Sequelize)
const Entities = EntitiesModel(sequelize, Sequelize)
const Context = ContextModel(sequelize, Sequelize)
const KnowledgeBase = KnowledgeBaseModel(sequelize, Sequelize)
const Document = DocumentModel(sequelize, Sequelize)

Agent.hasMany(Intents, {
    foreignKey: {
      name: 'ProjectId',
      allowNull: false
    }
  })

  Agent.hasMany(Entities, {
    foreignKey: {
      name: 'ProjectId',
      allowNull: false
    }
  })

  Agent.hasMany(Context, {
    foreignKey: {
      name: 'ProjectId',
      allowNull: false
    }
  })

 

  Agent.hasMany(KnowledgeBase, {
    foreignKey: {
      name: 'ProjectId',
      allowNull: false
    }
  })

  KnowledgeBase.hasMany(Document, {
    foreignKey: {
      name: 'KnowledgeBaseFullname',
      allowNull: false
    }
  })

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Agent,
  Intents,
  Entities,
  Context,
  KnowledgeBase,
  Document
}