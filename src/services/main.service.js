import axios from 'axios';
import config from '../../config.json';

export const fetchMainData = () =>
  axios.get(`${config.APIUrl}/spaces/${config.spaceID}/entries/3hi46zzYLYaSg66wgQO6IQ?access_token=${config.deliveryAPIToken}`)