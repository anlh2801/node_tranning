const admin = require('firebase-admin');

var serviceAccount = require('./testnodejs-b1d90-firebase-adminsdk-13ij3-284885afef.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
//addData();

function addData (collectionName, data){
    var docRef = db.collection(collectionName).doc(data.id + '_' + data.fullName);
    docRef.set(data);
    
}

function getAllData (collectionName){
  console.log(collectionName);
  return db.collection(collectionName).get().then((snapshot) => {
    let result = [];
    snapshot.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}

module.exports = {addData, getAllData}
