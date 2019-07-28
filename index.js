const newman = require('newman');

newman.run({
    collection: require('./postman/PrimusFX.postman_collection.json'),
    environment: require('./variables/client.postman_environment.json'),
    reporters: "html",
    reporter: { html: {export: "reports/report.html"} }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
