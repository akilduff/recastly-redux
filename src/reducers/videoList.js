import Redux from 'redux';

var videoListReducer = (state, action) => {
  // Why would there be state = sampleData?

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

    // output: a new state
    return newState.videoList;
  } else {
    return initialState.videoList
  }
};

export default videoListReducer;
