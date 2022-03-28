import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = sec =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request took too long!')), sec * 1000)
  );

export const AJAX = async (url, uploadData = undefined) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    // Guard Clause
    // prettier-ignore
    if (!res.ok) throw new Error(`${data.message} | ${res.statusText} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
export const getJSON = async url => {
  try {
    // prettier-ignore
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    // Guard Clause
    // prettier-ignore
    if (!res.ok) throw new Error(`${data.message} | ${res.statusText} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async (url, uploadData) => {
  try {
    const fetchPro = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(uploadData),
    });
    // prettier-ignore
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    // Guard Clause
    // prettier-ignore
    if (!res.ok) throw new Error(`${data.message} | ${res.statusText} (${res.status})`);

    return data;
  } catch (error) {
    throw error;
  }
};
*/
