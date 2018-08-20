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