import { put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_COMMENTS,
  setComments,
  requestCommentsError,
} from "../Store/CommentReducer";
import { getCommentsById, loading } from "../ApiServices";

function* fetchCommentsWorker(action) {
  try {
    const comments = yield call(getCommentsById, action.id);
    yield loading();
    yield put(setComments(comments, action.id));
  } catch (error) {
    yield put(requestCommentsError(error));
  }
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}