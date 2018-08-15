/**
 * @author -> Dare McAdewole
 */
import Vue from 'vue'
import Axios from 'axios'

/**
 * @var {object}
 */
const config = {
	appId: 'XQ3hkwGKgiJtbf0qkjUuASHE79QwPI9QZHyMlYCP',
	restApiKey: 'fMzCnhSIMJrGcDYRXKbYRZg0UtTvrT9bGCgwZiwn',
	serverURL: 'https://parseapi.back4app.com/',
	clientKey: 's8SzrT9CiyQXMdTCIx17ZAxEIs3gsub7EHwUf4Sp',
	masterKey: 'jofyR5NggpBzAgr95YVlwWstlKRKaK3Etl3SZQon'
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
