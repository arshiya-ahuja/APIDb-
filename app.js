const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

// const DetectIntent = require('./routes/DetectIntent.js')
const CreateIntent = require('./routes/CreateIntent.js')
const CreateEntity = require('./routes/CreateEntity.js')
// const DeleteIntent = require('./routes/DeleteIntent.js')
// const CreateKnowledgeBase = require('./routes/CreateKnowledgeBase.js')
// const ListKnowledgeBase = require('./routes/ListKnowledgeBase.js')
// const DeleteKnowledgeBase = require('./routes/DeleteKnowledgeBase.js')
// const CreateDocument = require('./routes/CreateDocument.js')
// const DeleteDocumnet = require('./routes/DeleteDocument.js')

// const CreateEntityType = require('./routes/CreateEntityType.js')
// const CreateContext = require('./routes/CreateContext.js')
// const DeleteContext = require('./routes/DeleteContext.js')
// const ListContext = require('./routes/ListContext.js')

router.use(bodyParser());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  callback(null, corsOptions); // callback expects two parameters: error and options
}
router.options('*', cors(corsOptionsDelegate))
// router.post('/DetectIntent', cors(corsOptionsDelegate), DetectIntent.DetectIntent); 
router.post('/CreateIntent', cors(corsOptionsDelegate), CreateIntent.CreateIntent); 
// router.post('/DeleteIntent', cors(corsOptionsDelegate), DeleteIntent.DeleteIntent);
// router.post('/CreateKnowledgeBase', cors(corsOptionsDelegate), CreateKnowledgeBase.CreateKnowledgeBase);
// router.get('/ListKnowledgeBase', cors(corsOptionsDelegate), ListKnowledgeBase.ListKnowledgeBase);
// router.post('/DeleteKnowledgeBase', cors(corsOptionsDelegate), DeleteKnowledgeBase.DeleteKnowledgeBase);
router.post('/CreateEntity', cors(corsOptionsDelegate), CreateEntity.CreateEntity);
// router.post('/CreateEntityType', cors(corsOptionsDelegate), CreateEntityType.CreateEntityType);
// router.post('/CreateDocument',urlencodedParser, cors(corsOptionsDelegate), CreateDocument.CreateDocument);
// router.post('/DeleteDocument', cors(corsOptionsDelegate),DeleteDocumnet.DeleteDocument);
// router.post('/CreateContext', cors(corsOptionsDelegate),CreateContext.CreateContext);
// router.post('/DeleteContext', cors(corsOptionsDelegate),DeleteContext.DeleteContext);
// router.post('/ListContext', cors(corsOptionsDelegate),ListContext.ListContexts);

router.use(function(req,res,next)
{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers", "Origin,X-requested-With,Content-Type,Authorization,Accept");
})


const port = 3000
app.use(router)
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})