import axios from 'axios';

const REQUEST_URL = 'https://ee7gbteyi8.execute-api.us-east-1.amazonaws.com/dev/courses';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const COURSE_API_URL = async (type, pageNumber) => {
  const response = await axios.get(`${REQUEST_URL}`);
  return response;
};
