import axios from 'axios';
const API_URL = "https://dog.ceo/api/";
export const actions = {
  GET_IMAGES({commit}){
    axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_IMAGES' , response.data.message);
			})
  },
  GET_SEARCHRESULTS({commit},searchItem){
    console.log(searchItem)
    axios.get(`${API_URL}breed/${searchItem.searchItem}/images`)
			.then(response=>
			{
				console.log(response)
        commit('SET_SEARCHRESULTS' , response.data.message);
			})
  },
  GET_BREEDS({commit}){
    axios.get(`${API_URL}breeds/list/all`)
			.then(response=>
			{
				// console.log(response)
        commit('SET_BREEDS' , response.data.message);
			})
  },
};