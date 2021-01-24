import NameSpace from '../name-space';
// import {createSelector} from 'reselect';
// import {transformOfferShape} from '../../utils.js';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getToken = (state) => state[NameSpace.USER].token;

// const getFavorites = (state) => {
//   return state[NameSpace.USER].favorites;
// };

// const getSortedFavorites = createSelector(
//     getFavorites,
//     (offers) => {
//       const favorites = [];
//       const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));
//       cities.map((item) => {
//         favorites.push({
//           city: item,
//           offers: offers.filter((offer) => offer.city.name === item).map((element) => transformOfferShape(element))
//         });
//       });
//       return favorites;
//     }
// );

// const getIsSignInRequired = (state) => {
//   return state[NameSpace.USER].isSignInRequired;
// };

// const getUserName = (state) => {
//   return state[NameSpace.USER].userName;
// };

// export {getAuthorizationStatus, getSortedFavorites, getIsSignInRequired, getUserName};
export {
  getAuthorizationStatus,
  getToken,
};
