import axios from "./axiosConfig";
export const getAllCalendar = () => {
  return axios.get("/calendar/all");
};

export const createCalendar = (form) => {
  return axios.post("/calendar/create", form);
};

export const getCalendarById = (id) => {
  return axios.get(`/calendar/get/${id}`);
};

export const updateCalendar = (id, form) => {
  return axios.put(`/calendar/update/${id}`, form);
};

export const deleteCalendar = (id) => {
  return axios.delete(`/calendar/delete/${id}`);
};
