import Redux from 'redux';

var currentVideoReducer = (state, action) => {

  if (state === undefined) {
    state = null;
  }
  if (action.type === 'CHANGE_VIDEO') {
    const newState = {};
    const newCurrentVideo = action.video;
    newState.currentVideo = newCurrentVideo;

    // output: a new state
    return newState.currentVideo;
    // NOT THE WHOLE STATE, just current video
  } else {
    return state
  }
};

export default currentVideoReducer;
