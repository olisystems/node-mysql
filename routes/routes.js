const sql = require('../db.js');
// set up end point
const appRouter = function (app) {
    app.get('/results', (req, res) => {
        sql.query('SELECT * FROM sws1_energ', function (err, results, fields) {
            if (err) {
                return res.send({ "status": 500, "error": error, "response": null });
            } else {
                let supply = [];
                let time = [];
                Object.keys(results).forEach(key => {
                    const value = results[key];
                    supply.push(value.active_Energy_Supply);
                    time.push(value.timestamp_format);
                })
                return res.send({ "status": 200, "error": null, "supply": supply, 'time': time });
            }
        });
    })
}

module.exports = appRouter;