import axios from "axios";

export const getLessons = () => {
  return axios.get(`/api/lessons`);
};

export const getLesson = (lesson_id) => {
  return axios.get(`/api/lessons/${lesson_id}`);
};
