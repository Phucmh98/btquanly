// reducers/CommentReducer.js
import { CREATE_COMMENT, GET_ALL_COMMENT } from "../constants/Cyberbugs/CommentConstants";

const initialState = {
  arrComment: [{
    "user": {
      "userId": 5239,
      "name": "Nghia",
      "avatar": "https://ui-avatars.com/api/?name=Nghia"
    },
    "id": 9224,
    "userId": 5239,
    "taskId": 10264,
    "contentComment": "12312312",
    "deleted": false,
    "alias": "12312312"
  },
  {
    "user": {
      "userId": 5239,
      "name": "Nghia",
      "avatar": "https://ui-avatars.com/api/?name=Nghia"
    },
    "id": 9243,
    "userId": 5239,
    "taskId": 10264,
    "contentComment": "b",
    "deleted": false,
    "alias": "b"
  },
  {
    "user": {
      "userId": 5239,
      "name": "Nghia",
      "avatar": "https://ui-avatars.com/api/?name=Nghia"
    },
    "id": 9244,
    "userId": 5239,
    "taskId": 10264,
    "contentComment": "123",
    "deleted": false,
    "alias": "123"
  },
  {
    "user": {
      "userId": 5274,
      "name": "string",
      "avatar": "https://ui-avatars.com/api/?name=string"
    },
    "id": 9271,
    "userId": 5274,
    "taskId": 10264,
    "contentComment": "<p>accc</p>",
    "deleted": false,
    "alias": "<p>accc<-p>"
  }],
};

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT: {
      return {
        ...state
      };

    }
    case GET_ALL_COMMENT: {
      console.log('state.arrComment', state.arrComment)
      return { ...state, arrComment: action.dataComment }
    }

    default:
      return state;
  }
};
