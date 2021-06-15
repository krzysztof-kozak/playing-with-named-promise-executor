const database = {
  user: 'tod',
  number: 5,
};

function displayInfoFromDb(arbitrarySuccess, key) {
  return new Promise((resolve, reject) => {
    // Arbitrarily wait 3 seconds to simulate fetching data
    setTimeout(() => {
      if (arbitrarySuccess) {
        resolve(database[key]);
        console.log(database[key]);
      } else {
        reject('Could not get the data...');
      }
    }, 3000);
  });
}

function onrejected() {
  console.log("Oops, looks like we couldn't fetch the data");
}

displayInfoFromDb(true, 'user')
  .then(() => displayInfoFromDb(true, 'user'), onrejected)
  .then(displayInfoFromDb.bind(this, true, 'number'), onrejected)
  .then(displayInfoFromDb.bind(this, false, 'user'), onrejected)
  .then(displayInfoFromDb.bind(this, true, 'number'), onrejected);
// Expected output:
// 1. Wait 3 seconds -> promise resolved -> console log 'tod'        -> chain the next promise
// 2. Wait 3 seconds -> promise resolved -> console log 'tod         -> chain the next promise
// 3. Wait 3 seconds -> promise resolved -> console log  5           -> chain the next promise
// 4. Wait 3 seconds -> promise rejected -> fire onrejected callback -> do not chain the next promise
// 5. End.
