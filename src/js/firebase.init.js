angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgC7WbYIVLnAyCql2fXOhwsCERl-HcdqY",
    authDomain: "authfirebase-40b1e.firebaseapp.com",
    databaseURL: "https://authfirebase-40b1e.firebaseio.com",
    storageBucket: "authfirebase-40b1e.appspot.com",
    messagingSenderId: "848381304196"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  

  //messaging.usePublicVapidKey('AIzaSyCy6Pj5L2JHERiPObGdp4-2dsn2sR3St-Y');

  /*const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });*/

})
//
/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/