const tick = Date.now();
const log = (n) => console.log(`${n} ---> ${Date.now() - tick}ms passed...`);

const db = {
  'Some item': 712252,
  'Some other item': 097823,
};

const delay = (ms, shouldReject) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getItem(key, delayInMs, shouldReject = false) {
  if (shouldReject) {
    return new Promise((_, reject) => setTimeout(() => reject('rejected'), delayInMs));
  }

  const item = db[key];
  await delay(delayInMs, shouldReject);

  return item;
}

async function getItemsFromSomeAPI() {
  try {
    const dataItem1 = getItem('Some item', 1000);
    const dataItem2 = getItem('Some other item', 1000);
    const dataItem3 = getItem('Some item', 1000, true);

    const item = await Promise.allSettled([dataItem1, dataItem2, dataItem3]);

    return [item];
  } catch (error) {
    console.log(error);
    return 'We are going to be fine';
  }
}

getItemsFromSomeAPI()
  .then((result) => console.log(...result))
  .catch((error) => console.log({ error }));
