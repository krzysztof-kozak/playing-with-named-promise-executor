const database = {
  user: 'tod',
  number: 5,
};

function createUserPromise(db, accessorPrivilege) {
  function getUserFromDb(resolve, reject) {
    if (accessorPrivilege === 'admin') {
      setTimeout(() => resolve(db.user), 2000);
    } else {
      setTimeout(() => reject('You are not authorized to view this data'), 2000);
    }
  }
  return (userPromise = new Promise(getUserFromDb));
}

function successfulFetchHandler(data) {
  console.log(data);
}

function unSuccessfulFetchHandler(data) {
  console.log(data);
}

const userDataPromise = createUserPromise(database, 'not admin');
userDataPromise.then(successfulFetchHandler, unSuccessfulFetchHandler);
