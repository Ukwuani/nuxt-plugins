/**
 * @author -> Ukwuani Barnabas
 */
import Vue from 'vue'

const ParseAPI = Vue.prototype.$parseapi

export default class ObjectModel {

    /**
     * 
     * @param {string} className
     * @param {object} data
     * @returns {Promise}
     */
    static create (className, data) {        
        return ParseAPI({
        method: 'POST',
        url:   `classes/${className}`,
        data: data
        })
    }

    /**
     * 
     * @param {string} className
     * @param {string} objectId
     * @returns {Promise}
     */
    static read (className, objectId) {
        return ParseAPI({
          method: 'GET',
          url: `classes/${className}/${objectId}`         
        })
    }

    /**
     * 
     * @param {string} className
     * @returns {Promise}
     */
    static readAll (className) {
        return ParseAPI({
          method: 'GET',
          url: `classes/${className}`
        })
    }

    /**
     * 
     * @param {object} args
     * @param {string} args.className
     * @param {string} args.objectId
     * @param {object} args.data
     * @returns {Promise}
     */
    static update ({className, objectId, data}) {
        if (!className || !objectId|| !data) {
            Promise.reject('You must provide a className, objectId and data')
        }
        return ParseAPI({
            method: 'PUT',
            url: `classes/${className}/${objectId}`,
            data
          })
    } 
    
    /**
     * 
     * @param {string} className
     * @param {string} objectId
     * @returns {Promise}
     */
    static delete (className, objectId) {
        return ParseAPI({
            method: 'DELETE',
            url: `classes/${className}/${objectId}`
          })
    }
    
}