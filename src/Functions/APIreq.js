import axios from "axios";
import { useState } from "react";

export const defAPI = (setInfo, page, perPage) => {
  axios
    .get(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API}`,
      },
    })
    .then((res) => {
      setInfo({ data: res.data, isLoading: true });
    });
};

export const searchAPI = (setInfo, value) => {
  axios
    .get(`https://api.unsplash.com/search/photos?page=1&query=${value}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API}`,
      },
    })
    .then((res) => {
      setInfo({ data: res.data.results, isLoading: true });
    });
};

export const loadMoreAPI = (info, setInfo, page, perPage) => {
  axios
    .get(`https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API}`,
      },
    })
    .then((res) => {
      setInfo({ data: [...info.data, ...res.data], isLoading: true });
    });
};
