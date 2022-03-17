require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT;

// for parsing json
app.use(
	bodyParser.json({
		limit: '20mb',
	}),
);
// for parsing application/x-www-form-urlencoded
app.use(
	bodyParser.urlencoded({
		limit: '20mb',
		extended: true,
	}),
);

app.use(require('./app/routes'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

