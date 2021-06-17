const randomResolution = () => {
  let num = Math.random() * 2;
  num = Math.floor(num);
  if (num === 1) {
    return true;
  } else {
    return false;
  }
};

const userConsentPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (randomResolution()) {
      resolve('Granted');
    } else {
      reject('Denied');
    }
  }, 2000);
});

async function getUserConsent() {
  try {
    const consent = await userConsentPromise;
    console.log(consent);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(userConsentPromise);
    /*
      [[PromiseState]]: "rejected" or "fulfilled"
      [[PromiseResult]]: "Denied" or "Granted"
    */
  }
}
getUserConsent();
