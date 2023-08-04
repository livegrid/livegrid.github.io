import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.15f19b2b.js","_app/immutable/chunks/index.b8c32cc7.js","_app/immutable/chunks/index.497fad04.js"];
export const stylesheets = ["_app/immutable/assets/2.581af9d9.css"];
export const fonts = [];
