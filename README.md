# How to Use the **Auth**, **axios** and **parse-server** plugins with *NUXTJs*

> Note:
This plugin ships with and should be used with **`axios`** and **`parse-server`** plugins

## Configuration & Setup

1 Pull this repo

2 Make sure the `Auth` folder, `axios.js` and `parse-server.js` are in Nuxt's `plugin` directory

3 Add the `axios`, `parse-server` and `Auth` plugin to the `plugin` array in `nuxt.config.js` (**in this same order**) i.e.

 ```js
 {
    ...
    plugins: [
        ...
        '~/plugins/axios',
        '~/plugins/parse-server',
        '~/plugins/Auth',
        ...
  ],
    ...
 }
 ```

 4 Edit the `config` constant in `parse-server.js` to suit your Parse APP details:

 ```javascript
 const config = {
    appId: '<PARSE-APP-ID>',
    restApiKey: '<PARSE-REST-API-KEY>',
    serverURL: '<PARSE-SERVER-URL>',
    clientKey: '<PARSE-CLIENT-KEY>',
    masterKey: '<PARSE-MASTER-KEY>'
}
 ```

## Documentation

 You can use `this.$user` to access any of the following methods:
 **ALL METHODS RETURN Promises**

### Creating a User

Method: `create`
Parameter: `user`(object)

```javascript
this.$user.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: 'blahblahblah'
}).then((response) => {}).catch(err => {})
```

### Authenticating a User

Method: `authenticate`
Parameter: `username`(string) and `password`(string)

```javascript
this.$user.authenticate('John_Doe', 'blahblahblah')
.then((response) => {}).catch(err => {})
```

### Get a Particular User by `objectId`

Method: `get`
Parameter: `objectId`(string)

```javascript
this.$user.get('5fsstgy7').then((response) => {}).catch(err => {})
```

### Get ALL users

Method: `getAll`
Parameter: `None`

```javascript
this.$user.getAll().then((response) => {}).catch(err => {})
```

### Updating a User

Method: `update`
Parameter: An Object{} that contains `token`(string), `objectId`(string) and `data`(object)

```javascript
this.$user.update({
    token: '<USER_TOKEN>',
    objectId: '<OBJECT_ID>',
    data: {
        name: 'Doe John'
    }
})
.then((response) => {}).catch(err => {})
```

### Validating a User Session

Method: `validateSession`
Parameter: `token`(string)

```javascript
this.$user.validateSession('<USER_TOKEN>')
.then((response) => {}).catch(err => {})
```

### Resetting a User's Passsword

Method: `resetPassword`
Parameter: `email`(string)

```javascript
this.$user.resetPassword('john@doe.com')
.then((response) => {}).catch(err => {})
```

## Bonus

You can

- Use `this.$http` to do API calls the normal way you would with `axios`

    ```javascript
    this.$http.get('https://www.restapi.com/data').then().catch()
    ```
- Use `this.$parseapi` to ease API calls to Parse Server. e.g. To access other classes:

    ```javascript
    this.$parseapi.get('/classes/<Class>').then().catch()
    ```
