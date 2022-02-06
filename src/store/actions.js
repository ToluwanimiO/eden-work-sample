import axios from 'axios';
const API_URL = "https://dog.ceo/api/";
export const actions = {
  GET_IMAGES({commit}){
    axios.get(`${API_URL}breeds/image/random/50`)
			.then(response=>
			{
				console.log(response)
        commit('SET_IMAGES' , response.data.message);
			})
  },
  // GET_JOBS({commit}){
  //   window.axios.get("https://still-sands-03593.herokuapp.com/api/job")
  //     .then(response=>
  //     {
  //       console.log(response.data.results)
  //       commit('SET_JOBS',response.data.results);
  //     })
  // },

  // GET_CATEGORIES_LIST({commit}){
  //   window.axios.get("https://still-sands-03593.herokuapp.com/api/school/categories/")
	// 		.then(response=>
	// 		{
	// 			console.log(response.data,'gettingCats')
  //       commit('SET_CATEGORIES' , response.data);
  //       window.axios.get("https://still-sands-03593.herokuapp.com/api/school/"+response.data[0].slug+"/courses")
  //       .then(response=>
  //       {
  //         console.log(response.data.results,'gettingCourses')
  //         commit('SET_COURSES',response.data.results)
  //         // this.courses = response.data.results
  //         // this.coursesStatus = this.courses.length
  //       })
	// 		})
  // }
};