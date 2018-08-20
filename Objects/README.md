## Performing CRUD on Classes || create, read, update and delete.


### Creating an Object

Method: `create`
Parameter: `className`(string) and `data`(object)

```javascript
this.$objs.create('Category', {
    foo: 'bar',
    name: 'kettle',
    lang: 'Ibo'
})
    .then((response) => {})
    .catch(err => {})
```

### Reading a Particular Object in a Class

Method: `read`
Parameter: `className`(string) and `objectId`(string)

```javascript
this.$objs.read('Categories', 'xxYIgdj7')
    .then((response) => {})
    .catch(err => {})
```


### Get all Objects in a Class

Method: `readAll`
Parameter: `className`(string)

```javascript
this.$objs.get('Categories')
    .then((response) => {})
    .catch(err => {})
```


### Updating a Particular Object in a Class

Method: `update`
Parameter: `className`(string), `objectId`(string) and `data`(object)

```javascript
this.$objs.update({
    className: 'Categories',
    objectId: 'xxNmIJk5',
    data: {
        foo: 'bar',
        name: 'Doe John',
        lang: 'Yoruba'
    }
})
    .then((response) => {})
    .catch(err => {})
```

### Deleting a Particular Object from a class

Method: `delete`
Parameter: `className`(string) and `objectId`

```javascript
this.$objs.delete('xxYYNUI4')
    .then((response) => {})
    .catch(err => {})
```

#👏 Dare MCAdewole
`Author: Ukwuani Barnabas` 
