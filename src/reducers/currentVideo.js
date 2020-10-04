import Redux from 'redux';

var currentVideoReducer = (state, action) => {

  if (state === undefined) {
    state = null;
  }
  if (action.type === 'CHANGE_VIDEO') {
    const newState = {};
    const newCurrentVideo = action.video;
    newState.currentVideo = newCurrentVideo;

    return newState.currentVideo;

  } else {
    return state;
  }
};

export default currentVideoReducer;
