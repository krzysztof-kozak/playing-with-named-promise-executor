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
  const dataItem1 = getItem('Some item', 4000);
  const dataItem2 = getItem('Some other item', 2000);

  // item that was rejected or resolved the fastest
  const item = await Promise.race([dataItem1, dataItem2]);

  return [item];
}

getItemsFromSomeAPI().then((result) => log(result));
