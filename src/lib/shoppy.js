import Commerce from '@chec/commerce.js';

console.log(process.env.REACT_APP_CHEC_PUB_KEY)
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUB_KEY, true);