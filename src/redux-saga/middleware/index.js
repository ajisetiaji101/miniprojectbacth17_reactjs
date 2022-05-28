import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeTestimoni from "../constants/Testimoni";
import * as ActionTypePlacement from "../constants/Placement";
import * as ActionTypeInstructor from "../constants/Instructor";
import * as ActionTypeSettings from "../constants/Settings";
import * as ActionTypeTalent from "../constants/Talent";
import * as ActionTypeHiring from "../constants/Hiring";

import * as ActionTypeAppCurriculum from "../constants/AppCurriculum";
import * as ActionTypeCurriculum from "../constants/CurriculumConstant";
import * as ActionTypeBatch from "../constants/BatchConstant";
import * as ActionTypeAppBatch from "../constants/AppBatch";
import * as ActionTypeJob from "../constants/Job";
import * as ActionTypeProcessBootcamp from "../constants/ProcessBootcampConstant";
import * as ActionTypeTalentTimeline from "../constants/TalentTimelineConstant";

import * as ActionTypeClient from '../constants/Client'

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetTestimoniSaga } from "./TestimoniSaga";
import { handleGetInstructorSaga } from "./InstructorSaga";
import {
  handleDeletePlacementSaga,
  handleGetPlacementSaga,
} from "./PlacementSaga";
import {
  handleGetAppCurriculum,
  handleEditCurriculum,
  handleDeleteCurriculum,
  handleEditCurriculumStatus,
  handleGetCurriculumId,
} from "./AppCurriculumSaga";
import {
  handleAddCurriculum,
  handleGetCurriculum,
  handleGetByIdCurriculum,
  handleUpdateCurriculum,
  handleAddCurriculumMateri,
} from "./CurriculumSaga";
import { handleGetTalentSaga } from "./TalentSaga";
import { handleGetHiringSaga, handleGetHiringIdSaga, handleGetHiringCitySaga } from "./HiringSaga";
import { handleGetBatch, handleAddBatch } from "./BatchSaga";
import {
  handleGetAppBatch,
  handleEditBatchStatus,
  handleDeleteBatch,
  handleGetBatchId,
  handleEditBatch,
} from "./AppBatchSaga";
import {
  handleGetTalent,
  handleUpdateTalent,
  handleUpdateTalentNoFile,
} from "./SettingsSaga";
import { handleGetJob, handleAddJob, handleDeleteJob } from "./JobSaga";
import { handleAddProcessBootcampSaga } from "./ProcessBootcampSaga";
import { handleAddTalentTimelineSaga, handleGetTalentTimelineSaga } from "./TalentTimelineSaga";

import { handleGetClient } from './ClientSaga'


function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(
      ActionTypeTestimoni.GET_TESTIMONI_REQUEST,
      handleGetTestimoniSaga
    ),
    takeEvery(
      ActionTypeInstructor.GET_INSTRUCTOR_REQUEST,
      handleGetInstructorSaga
    ),
    takeEvery(
      ActionTypePlacement.GET_PLACEMENT_REQUEST,
      handleGetPlacementSaga
    ),
    takeEvery(
      ActionTypePlacement.DELETE_PLACEMENT_REQUEST,
      handleDeletePlacementSaga
    ),

    takeEvery(ActionTypeSettings.GET_TALENT_REQUEST, handleGetTalent),
    takeEvery(ActionTypeSettings.UPDATE_TALENT_REQUEST, handleUpdateTalent),
    takeEvery(
      ActionTypeSettings.UPDATE_TALENTNOFILE_REQUEST,
      handleUpdateTalentNoFile
    ),

    takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalentSaga),
    takeEvery(ActionTypeHiring.GET_HIRING_REQUEST, handleGetHiringSaga),
    takeEvery(ActionTypeHiring.GET_HIRING_ID_REQUEST, handleGetHiringIdSaga),
    takeEvery(ActionTypeHiring.GET_HIRING_CITY_REQUEST, handleGetHiringCitySaga),

    takeEvery(
      ActionTypeAppCurriculum.GET_CURRICULUM_REQUEST,
      handleGetAppCurriculum
    ),
    takeEvery(
      ActionTypeAppCurriculum.DELETE_CURRICULUM_REQUEST,
      handleDeleteCurriculum
    ),
    takeEvery(
      ActionTypeAppCurriculum.EDIT_CURRICULUM_STATUS_REQUEST,
      handleEditCurriculumStatus
    ),
    takeEvery(
      ActionTypeAppCurriculum.GET_CURRICULUM_ID_REQUEST,
      handleGetCurriculumId
    ),
    takeEvery(
      ActionTypeAppCurriculum.EDIT_CURRICULUM_REQUEST,
      handleEditCurriculum
    ),
    takeEvery(ActionTypeCurriculum.GET_CURRICULUM_REQUEST, handleGetCurriculum),
    takeEvery(ActionTypeCurriculum.ADD_CURRICULUM_REQUEST, handleAddCurriculum),

    takeEvery(
      ActionTypeCurriculum.GET_BY_ID_CURRICULUM_REQUEST,
      handleGetByIdCurriculum
    ),
    takeEvery(
      ActionTypeCurriculum.UPDATE_CURRICULUM_REQUEST,
      handleUpdateCurriculum
    ),
    takeEvery(
      ActionTypeCurriculum.ADD_CURRICULUM_MATERI_REQUEST,
      handleAddCurriculumMateri
    ),

    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.ADD_BATCH_REQUEST, handleAddBatch),
    takeEvery(ActionTypeAppBatch.GET_BATCH_REQUEST, handleGetAppBatch),
    takeEvery(
      ActionTypeAppBatch.EDIT_BATCH_STATUS_REQUEST,
      handleEditBatchStatus
    ),
    takeEvery(ActionTypeAppBatch.DELETE_BATCH_REQUEST, handleDeleteBatch),
    takeEvery(ActionTypeAppBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeAppBatch.EDIT_BATCH_REQUEST, handleEditBatch),

    takeEvery(ActionTypeJob.GET_JOB_REQUEST, handleGetJob),
    takeEvery(ActionTypeJob.ADD_JOB_REQUEST, handleAddJob),
    takeEvery(ActionTypeJob.DELETE_JOB_REQUEST, handleDeleteJob),

    takeEvery(ActionTypeProcessBootcamp.ADD_PROCESS_BOOTCAMP_REQUEST, handleAddProcessBootcampSaga),

    takeEvery(ActionTypeTalentTimeline.GET_TALENTTIMELINE_REQUEST, handleGetTalentTimelineSaga),
    takeEvery(ActionTypeTalentTimeline.ADD_TALENTTIMELINE_REQUEST, handleAddTalentTimelineSaga),

    takeEvery(ActionTypeClient.GET_CLIENT_REQUEST, handleGetClient),

  ]);
}

export default watchAll;
