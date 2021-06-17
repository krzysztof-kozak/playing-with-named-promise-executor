const tick = Date.now();
const log = (n) => console.log(`${n} ---> ${Date.now() - tick}ms passed...`);

const db = {
  'Some item': 712252,
  'Some other item': 097823,
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getItem(key) {
  const item = db[key];
  await delay(2000);
  return item;
}

async function getItemsFromSomeAPI() {
  const dataItem1 = getItem('Some item');
  const dataItem2 = getItem('Some other item');
  const items = await Promise.all([dataItem1, dataItem2]);

  // dataItem1 and dataItem2 are being fetched at the same time
  // without blocking execution

  // This reduces the time taken by 50%!

  // This will not work if we need value of dataItem1 before dataItem2 (e.g need user id before we can get user logs)
  // This will work if the items are unrelated and can be fetched independently, at the same time

  return [items];
}

getItemsFromSomeAPI().then((result) => log(result));
