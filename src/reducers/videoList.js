import Redux from 'redux';

var videoListReducer = (state, action) => {

  const initialState = {
    currentVideo: null,
    videoList: []
  };

  if (state === undefined) {
    state = initialState;
  }
  if (action.type === 'CHANGE_VIDEO_LIST') {
    const newState = {};
    const newVideoList = action.videos;
    newState.videoList = newVideoList;

    return newState.videoList;
  } else {
    return initialState.videoList;
  }
};

export default videoListReducer;
