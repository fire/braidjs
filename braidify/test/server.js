var braidify = require('../braidify-server.js')
var sendfile = (f, req, res) => res.end(require('fs').readFileSync(require('path').join(__dirname, f)))
require('http').createServer(
    (req, res) => {
        braidify(req, res)

        if (req.url === '/json') {
            if (req.subscribe)
                res.startSubscription()
            else
                res.statusCode = 200

            // Send the current version
            res.sendVersion({
                version: 'test',
                body: JSON.stringify({this: 'stuff'})
            })

            setTimeout(() => res.sendVersion({version: 'another!', body: ''}),
                       500)

            if (!req.subscribe)
                res.end()
        }        

        else if (req.url === '/')
            sendfile('client.html', req, res)
        else if (req.url === '/braidify-client.js')
            sendfile('../braidify-client.js', req, res)
    }
).listen(9000, () => console.log("Listening on http://localhost:9000..."))
