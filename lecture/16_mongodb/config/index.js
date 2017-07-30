const configValues = require('./config.json')

module.exports = {
    //mongodb://<dbuser>:<dbpassword>@ds129003.mlab.com:29003/steve-lecture
    getDbConnectionString : () => {
        return 'mongodb://' + configValues.username + ":" + configValues.password + "@ds129003.mlab.com:29003/steve-lecture"
    }
}
