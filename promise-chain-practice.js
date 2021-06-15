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

function onfulfilled(arbitrarySuccess, key) {
  return displayInfoFromDb(arbitrarySuccess, key);
}

function onrejected() {
  console.log("Oops, looks like we couldn't fetch the data");
}

const promiseObject = displayInfoFromDb(false, 'user');

promiseObject
  .then(() => displayInfoFromDb(true, 'user'))
  .then(onfulfilled.bind(this, true, 'number'))
  .then(displayInfoFromDb.bind(this, false, 'user'))
  .then(displayInfoFromDb.bind(this, true, 'number'))
  .catch(onrejected)
  .finally(() => console.log(promiseObject));
