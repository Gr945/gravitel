import { call, put, takeEvery } from "redux-saga/effects";
import { fetchLoginUser } from "./async/fetchLoginUser";
import {
  loginUserAC,
  initDiagramAC
} from "./ActionCreators";
import {fetchInitDiagram} from './async/fetchInitDiagram'




//login
export function* workerLoginUser(action) {
  try {
    const loginUser = yield call(fetchLoginUser, action.payload);
    yield put(loginUserAC(loginUser));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

//init diagram
export function* workerInitDiagram(action) {
  try {
    const allDiagram = yield call(fetchInitDiagram);
    yield put(initDiagramAC(allDiagram));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

export function* watcher() {
  yield takeEvery("LOGIN_USER_SAGA", workerLoginUser);
  yield takeEvery("INIT_DIAGRAM_SAGA", workerInitDiagram)

}
