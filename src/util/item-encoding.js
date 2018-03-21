export const encodeStrings = items => items.map(el => encodeURIComponent(el).replace(/%20/g, '+')).join(',');
export const decodeStrings = encoded => encoded.split(',').map(el => decodeURIComponent(el.replace(/\+/g, '%20')));
