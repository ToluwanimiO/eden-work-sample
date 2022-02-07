import axios from 'axios';
const API_URL = "https://dog.ceo/api/";
export const actions = {
  GET_IMAGES({commit},more){
    // alert(JSON.parse(localStorage.getItem("images")).length)
    if(more=="more"){
      axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_IMAGES' , response.data.message);
			})
    }
    else if(!(localStorage.getItem("images")) || parseInt(JSON.parse(localStorage.getItem("images")).length)<=50){
      axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_IMAGES' , response.data.message);
			})
    }
    else{
      commit('RESET_IMAGES', JSON.parse(localStorage.getItem("images")));

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