const SERVER_URL = 'http://localhost:3000';

const REGISTER_USER_URL = '/users';
const GET_USER_URL = id => `/users/${id}`;

const GET_OFFERS_URL = '/offers';
const GET_USER_OFFER_URL = ids => {
  let idsToUrl = '';
  ids.map(
    (id, index) =>
      (idsToUrl = index === 0 ? `id=${id}` : idsToUrl + `&id=${id}`)
  );
  return `/offers?${idsToUrl}`;
};

const GET_TAGS_URL = '/tags';
const GET_OFFER_TAGS_URL = ids => {
  let idsToUrl = '';
  ids.map(
    (id, index) =>
      (idsToUrl = index === 0 ? `id=${id}` : idsToUrl + `&id=${id}`)
  );
  return `/tags?${idsToUrl}`;
};

export {
  SERVER_URL,
  REGISTER_USER_URL,
  GET_USER_URL,
  GET_OFFERS_URL,
  GET_USER_OFFER_URL,
  GET_TAGS_URL,
  GET_OFFER_TAGS_URL,
};
