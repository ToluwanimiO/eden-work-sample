import axios from 'axios';
const API_URL = "https://dog.ceo/api/";
export const actions = {
  GET_IMAGES({commit},more){
    if(more){
      axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_IMAGES' , response.data.message);
			})
    }
    else if(!(localStorage.getItem("images"))){
      axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_IMAGES' , response.data.message);
        axios.get(`${API_URL}breeds/image/random/50`)
        .then(resp=>
        {
          // console.log(response)
          commit('SET_IMAGES' , resp.data.message);
          
        })
			})
    }
    else{
      commit('SET_IMAGES' , JSON.parse(localStorage.getItem("images")));

    }
  },
  GET_SEARCHRESULTS({commit},searchItem){

      axios.get(`${API_URL}breed/${searchItem.searchItem}/images`)
			.then(response=>
			{
				console.log(response)
        commit('SET_SEARCHRESULTS' , response.data.message);
			})

  },
  GET_BREEDS({commit}){
    if(localStorage.getItem("breeds")){
      commit('SET_BREEDS' , JSON.parse(localStorage.getItem("breeds")));
    }else{
    axios.get(`${API_URL}breeds/list/all`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_BREEDS' , response.data.message);
        localStorage.setItem("breeds",JSON.stringify(response.data.message))
			})
    }
  },
};