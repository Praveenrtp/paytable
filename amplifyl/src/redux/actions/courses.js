import { COURSE_LIST, SET_ERROR } from '../types';
import { COURSE_API_URL } from '../../services/courses.service';

export const getCourses = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await COURSE_API_URL(type, pageNumber);
    const { Items } = response.data;
    dispatchMethod(COURSE_LIST, Items, dispatch);
    // dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};
// export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
//   try {
//     const response = await getMoviesRequest(type, pageNumber);
//     const { results, payload } = response;
//     dispatchMethod(LOAD_MORE_RESULTS, { list: results, page: payload.page, totalPages: payload.totalPages }, dispatch);
//   } catch (error) {
//     if (error.response) {
//       dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
//     }
//   }
// };

// export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
//   const payload = { page, totalPages };
//   dispatchMethod(RESPONSE_PAGE, payload, dispatch);
// };

// export const setMovieType = (type) => async (dispatch) => {
//   dispatchMethod(MOVIE_TYPE, type, dispatch);
// };

// const getCourseRequest = async (type, pageNumber) => {
//   const courses = await MOVIE_API_URL(type, pageNumber);
//   const { items, count, ScannedCount } = courses.data;
//   const payload = {
//     count,
//     ScannedCount: total_pages
//   };
//   return { results, payload };
// };
