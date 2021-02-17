import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
// Added
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';

// Added
let store = createStore(rootReducer);

// Added
test('Check that initial state of ticketListReducer matches root reducer', () => {
  expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
});

// Added
test('Check that initial state of formVisibleReducer matches root reducer', () => {
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
});

// Added
test('check that ADD_TICKET action works for ticketListReducer and root reducer', () => {
  const action = {
    type: 'ADD_TICKET',
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  }
  store.dispatch(action);
  expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, action));
});

// Added
test('check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
  const action = {
    type: 'TOGGLE_FORM'
  }
  store.dispatch(action);
  expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
});

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      formVisibleOnPage: false
    });
  });
});

