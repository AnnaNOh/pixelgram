// import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../users';
import * as APIUtil from '../../util/user';

const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

let testUser = {
  1: {
    id: 1,
    username: 'testuser1',
    email: 'test@gmail.com',
    img_url: 'https://www.imgur.com/1234.jpg'
  }
};

describe('actions', () => {
  test('receiveUsers should create an action to receive users', () => {
    const expectedAction = {
      type: actions.RECEIVE_USER,
      user: testUser
    };

    expect(actions.receiveUser(testUser)).toEqual(expectedAction);
  });
});
