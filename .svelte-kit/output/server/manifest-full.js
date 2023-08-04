export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cellularNoise.png","dashboard.png","favicon.png","robots.txt","simplexNoise.png","simplexRNoise.png","text.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.72d9cbef.js","app":"_app/immutable/entry/app.e18aa1b4.js","imports":["_app/immutable/entry/start.72d9cbef.js","_app/immutable/chunks/index.b8c32cc7.js","_app/immutable/chunks/singletons.0bd59fe1.js","_app/immutable/chunks/index.497fad04.js","_app/immutable/entry/app.e18aa1b4.js","_app/immutable/chunks/index.b8c32cc7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
