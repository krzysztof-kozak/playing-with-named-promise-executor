const createUserConsentPromise = (duration) => {
  function getUserConsent(resolve, reject) {
    setTimeout(() => {
      resolve('User consented');
    }, duration);
  }
  return (userConsentPromise = new Promise(getUserConsent));
};

const onUserConsent = (promiseObject) => console.log(promiseObject);
const onUserDecline = (promiseObject) => console.log(promiseObject);

const shortPromise = createUserConsentPromise(3000);
const longPromise = createUserConsentPromise(10000);

shortPromise.then(onUserConsent.bind(this, shortPromise), onUserDecline.bind(this, shortPromise));

longPromise.then(onUserConsent.bind(this, longPromise), onUserDecline.bind(this, longPromise));
