import { put, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_POSTS,
  setPosts,
  requestPostsError,
} from "../Store/PostReducer";
import { getAllPosts } from "../ApiServices";


const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });

function* fetchPostsWorker(action) {
  try {
    const posts = yield call(getAllPosts, action.postTitle);
    yield loading();

    yield put(setPosts(posts));
  } catch (error) {

    yield put(requestPostsError(error));

  }
}



export function* postsWatchers() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}

