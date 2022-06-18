import apiTalentTimeline from "../../api/api-timeline";
import { call, put } from "redux-saga/effects";
import { doAddTalentTimelineFailed, doAddTalentTimelineSucceed, doGetTalentTimelineFailed, doGetTalentTimelineSucceed } from "../actions/TalentTimelineAction";

function* handleGetTalentTimelineSaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiTalentTimeline.getTimeline, payload);
    yield put(doGetTalentTimelineSucceed(result));
  } catch (error) {
    yield put(doGetTalentTimelineFailed(error));
  }
}

function* handleAddTalentTimelineSaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiTalentTimeline.createTimeline, payload);
    yield put(doAddTalentTimelineSucceed(result.data));
  } catch (error) {
    yield put(doAddTalentTimelineFailed(error));
  }
}

export { handleGetTalentTimelineSaga, handleAddTalentTimelineSaga };
