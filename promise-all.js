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
  const dataItem1 = await getItem('Some item');
  const dataItem2 = await getItem('Some other item');

  // await dataItem1 (takes 2 seconds), and block execution until done
  // await dataItem2 (takes 2 seconds), and block execution until done
  // total wait time, 4 seconds

  return [dataItem1, dataItem2];
}

getItemsFromSomeAPI().then((result) => log(result));
