// import {createSelector} from 'reselect';
import NameSpace from '../name-space';
// import {transformOfferShape} from '../../utils.js';

const getCompany = (state) => state[NameSpace.DATA].company;

const getContact = (state) => state[NameSpace.DATA].contact;

export {getCompany, getContact};
