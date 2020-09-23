import { writable } from 'svelte/store';
import embed from './configure';
import connect from './connect';

const nebula = async () => {
  const app = await connect({
    // webIntegrationId: '',
    url: 'sense-demo.qlik.com',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  });
  return embed(app);
};

export const nebulaPromise = writable(nebula);