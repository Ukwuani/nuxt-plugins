/**
 * @author -> Dare McAdewole
 */
import Vue from 'vue'
import Axios from 'axios'

/**
 * @var {object}
 */
const config = {
	appId: '<PARSE-APP-ID>',
	restApiKey: '<PARSE-REST-API-KEY>',
	serverURL: '<PARSE-SERVER-URL>',
	clientKey: '<PARSE-CLIENT-KEY>',
	masterKey: '<PARSE-MASTER-KEY>'
}

/**
 * @var {object}
 */
const parseAPI = Axios.create({
	baseURL: config.serverURL,
	headers: {
		'X-Parse-Application-Id': config.appId,
		'X-Parse-REST-API-Key': config.restApiKey,
		'Content-Type': 'application/json',
		'X-Parse-Master-Key': config.masterKey,
		'X-Parse-Revocable-Session': 1
	}
})

Vue.prototype.$parseapi = parseAPI
