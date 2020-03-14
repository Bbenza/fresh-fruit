
const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ecommerceOrders', { useNewUrlParser: true }).
// catch(error => handleError(error));
// mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:/ecommerceOrders', { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/ecommerceOrders", {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to database...'))
.catch(err => console.log('Refuse to connect...', err));
// mongoose.createConnection('mongodb://localhost:27017/ecommerceOrders', { useNewUrlParser: true });

require('./order.model');
