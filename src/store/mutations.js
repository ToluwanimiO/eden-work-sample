export const mutations = {
      SET_IMAGES(state , payload){
        // console.log(state,payload)
        // console.log(state.dogImages.length)
        if (state.dogImages.length > 0)
        {
          state.dogImages = state.dogImages.concat(payload); 
        }
        else
        {
          state.dogImages = payload; 
        }
        localStorage.setItem("images",JSON.stringify(state.dogImages))
      },
      RESET_IMAGES(state , payload){
          state.dogImages = payload; 
      },
      SET_BREEDS(state , payload){
          state.breeds = payload; 
      },
      SET_SEARCHRESULTS(state , payload){
        state.searchResults = payload; 
    },
  };