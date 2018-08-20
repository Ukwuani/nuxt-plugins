/**
 * @author -> Dare McAdewole
 */
import Vue from 'vue'

const ParseAPI = Vue.prototype.$parseapi

export default class User {

    /**
     * 
     * @param {object} user
     * @returns {Promise}
     */
    static create(user) {
        return ParseAPI({
            method: 'POST',
            url: 'users/',
            data: user
        })
    }

    /**
     * 
     * @param {string} username
     * @param {string} password
     * @returns {Promise}
     */
    static authenticate(username, password) {
        return ParseAPI({
            method: 'GET',
            url: `login?username=${username}&password=${password}`
        })
    }

    /**
     * 
     * @param {string} objectId 
     * @returns {Promise}
     */
    static get(objectId) {
        return ParseAPI({
            method: 'GET',
            url: `users/${objectId}`
        })
    }

    /**
     * @param {null}
     * @returns {Promise}
     */
    static getAll() {
        return ParseAPI({
            method: 'GET',
            url: 'users'
        })
    }

    /**
     * 
     * @param {object} args
     * @param {string} args.token
     * @param {object} args.data
     * @param {string} args.objectId
     * @returns {Promise}
     */
    static update({ token, data, objectId }) {
        if (!token || !data || !objectId) {
            Promise.reject('You must provide a token, data and objectId')
        }
        return ParseAPI({
            method: 'PUT',
            url: `users/${objectId}`,
            data
        })
    }

    /**
     * 
     * @param {string} token
     * @returns {Promise}
     */
    static validateSession(token) {
        return ParseAPI({
            method: 'GET',
            url: 'users/me',
            headers: {
                'X-Parse-Session-Token': token
            }
        })
    }

    /**
     * 
     * @param {string} email
     * @returns {Promise}
     */
    static resetPassword(email) {
        return ParseAPI({
            method: 'POST',
            url: 'requestPasswordReset',
            data: { email }
        })
    }

}
#👏 Dare MCAdewole
`Authur: Dare McAdewole` 