export const mutations = {
      SET_IMAGES(state , payload){
        console.log(state,payload)
        console.log(state.dogImages.length)
        if (state.dogImages.length > 0)
        {
          state.dogImages = state.dogImages.concat(payload); 
        }
        else
        {
          state.dogImages = payload; 
        }
      },
      
  };