import { all, fork } from "redux-saga/effects";
import {
  postsWatchers,
} from "./Posts";
import { commentsWatcher } from "./Comments";
import { userWatcher } from "./User";

export function* rootWatcher() {
  yield all([
    fork(postsWatchers),
    fork(commentsWatcher),
    fork(userWatcher),
  ]);
}