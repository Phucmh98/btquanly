import { call, put, select, takeLatest } from 'redux-saga/effects'

import { STATUS_CODE } from '../../../util/constants/settingSystem';

import { CREATE_COMMENT, CREATE_COMMENT_SAGA, DELETE_COMMENT_SAGA, GET_ALL_COMMENT, GET_ALL_COMMENT_SAGA, UPDATE_COMMENT_SAGA } from '../../constants/Cyberbugs/CommentConstants';
import { commentService } from '../../../services/CommentService';
import { GET_TASK_DETAIL_SAGA } from '../../constants/Cyberbugs/TaskConstants';
function* createCommentSaga(action) {
    const { arrComment, taskId } = action;
    // console.log('arrComment', arrComment)
    try {

        const { data, status } = yield call(() => commentService.createComment(action.arrComment));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            yield put({
                type: GET_ALL_COMMENT_SAGA,
                taskId: taskId
            })
        }


    }
    catch (err) {
        console.log(err.response.data)
    }


}


export function* theoDoiCreateCommentSaga() {
    yield takeLatest(CREATE_COMMENT_SAGA, createCommentSaga);
}


function* getAllCommentSaga(action) {
    const { taskId } = action;
    console.log('action', action)
    try {

        const { data, status } = yield call(() => commentService.getAllComment(taskId));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            console.log('data,content', data.content)

            yield put({
                type: GET_ALL_COMMENT,
                dataComment: data.content
            })



        }


    }
    catch (err) {
        console.log(err.response.data)
    }


}


export function* theoDoiGetAllCommentSaga() {
    yield takeLatest(GET_ALL_COMMENT_SAGA, getAllCommentSaga);
}


function* deleteCommentSaga(action) {
    const { commentId, taskId } = action;
    // console.log('arrComment', arrComment)
    try {

        const { data, status } = yield call(() => commentService.deleteComment(commentId));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            yield put({
                type: GET_ALL_COMMENT_SAGA,
                taskId: taskId
            })
        }


    }
    catch (err) {
        console.log(err.response.data)
    }


}


export function* theoDoiDeleteCommentSaga() {
    yield takeLatest(DELETE_COMMENT_SAGA, deleteCommentSaga);
}


function* updateCommentSaga(action) {
    const { commentId, taskId,content } = action;
    // console.log('arrComment', arrComment)
    console.log('Đây là content test',content)
    try {

        const { data, status } = yield call(() => commentService.updateComment(commentId,content));

        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            
            yield put({
                type: GET_ALL_COMMENT_SAGA,
                taskId: taskId
            })
        }

    }
    catch (err) {
        console.log(err.response.data)
    }


}


export function* theoDoiUpdateCommentSaga() {
    yield takeLatest(UPDATE_COMMENT_SAGA, updateCommentSaga);
}