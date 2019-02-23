import local from './local';
import prod from './prod';

const config = {
  prod,
  local,
}[process.env.REACT_APP_BUILD] || local;

export default config;
