const tick = Date.now();
const log = (n) => console.log(`${n} ---> ${Date.now() - tick}ms passed...`);

const db = {
  'Some item': 712252,
  'Some other item': 097823,
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getItem(key, delayInMs) {
  const item = db[key];
  await delay(delayInMs);
  return item;
}

async function getItemsFromSomeAPI() {
  try {
    const dataItem1 = getItem('Some item', 4000);
    const dataItem2 = getItem('Some other item', 2000);
    const item = await Promise.race([dataItem1, dataItem2]);

    throw 'Something went wrong!';

    //this will return the item that was resolved the quickest, unless there was an error
    return [item];
  } catch (error) {
    console.log(error);
    return 'We are going to be fine';
    // throw 'This is broken!';

    // if we return a value , we basically ignore the error and provide a replacement value
    // the consumer of this promise will get the replacement value inside of then callback

    // if we throw an error, it will break the consumer's promise chain
    // the error value will get passed to the catch callback
  }
}

getItemsFromSomeAPI()
  .then((result) => console.log({ result }))
  .catch((error) => console.log({ error }));
