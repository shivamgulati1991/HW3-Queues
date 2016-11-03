# HW3-Queues

Understanding the basic building blocks that form complex infrastructure is an important precedent to being able to construct and deploy it.

### Complete set/get
Set and get the key on localhost:3000.

* To set, localhost:3000/set
* To get, localhost:3000/get

### Complete recent
Get recent 5 visited URLs by localhost:3000/recent.

### Complete upload/meow

* Upload the images using curl command as below
```
curl -F "image=@./img/<image_name.extension>" localhost:3000/upload
```

* Meow can be used as localhost:3000/meow. This will show the images in the browser.

#### Screencast for above 3 steps

![Screencast](https://github.com/shivamgulati1991/HW3-Queues/blob/master/1.gif)

### Complete spawn/destory/listservers
Implement spawn/destroy/listservers

* 'spawn' would create a new app server and store in redis.
* 'destroy' would destroy a random server from the already existing redis list.
* 'listservers' would give a list of available servers.

### Demonstrate proxy
A new proxy.js file is created which uses the available server list from redis and toggles between the same by looking into redis.
The console shows the message for redirection.

#### Screencast for above 2 steps

![Screencast](https://github.com/shivamgulati1991/HW3-Queues/blob/master/2.gif)
