import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UserActions from '../Redux/UserRedux'

export function * getUserAvatar (api, action) {
  /*
  const { username } = action
  // make the call to the api
  const response = yield call(api.getUser, username)

  if (response.ok) {
    const firstUser = path(['data', 'items'], response)[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(UserActions.userSuccess(avatar))
  } else {
    yield put(UserActions.userFailure())
  }
  */
}
