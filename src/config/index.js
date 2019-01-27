import local from './local';
import prod from './prod';

const config = process.env.REACT_APP_BUILD ? prod : local;

export default config;
