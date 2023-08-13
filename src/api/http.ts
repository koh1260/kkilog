import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  headers: {
    'Content-Type': 'application.json'
  }
};

const http = axios.create(axiosConfig);

export default http;
