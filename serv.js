console.log('[SERVER]: Starting webapp !');

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

function serve(url, res) {
	fs.readFile(url, 'utf8' , (err, data) => {
		if (!err) {
			res.send(data);
		}
	});
}

app.get('/viewall', async (req, res) => {
	var voices = [];
	fs.readdir('voices/', function (err, files) {
		files = files.map(function (file) {
			fs.readFile('voices/'+file, 'utf8' , (err, data) => {
				var ndata = JSON.parse(data);
				voices[voices.length] = {name: file.split('.json')[0], vd: ndata.voice}
			});
		});
	});
	setTimeout(function() {
		res.json(voices);
	}, 50)
});

app.post('/update', async (req, res) => {
	var name = req.body.username;
	var detection = req.body.detection;
	fs.writeFile('voices/'+name+'.json', '{"voice":"'+detection+'"}', function() {});
	res.json({response:"OK."});
});

app.get("/", async (req, res) => {
	serve('app/app.html', res);
});

app.use(function(req, res, next) {
	res.status(404);
	var url = req.url.substring(1);
	serve(url.replace(new RegExp(/\\/g),"/"), res);
});

app.listen(80, () => {
    console.log('[SERVER]: Webapp is open at `localhost:80`!')
})