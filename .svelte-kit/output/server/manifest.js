export const manifest = {
	appDir: "_app",
	appPath: "livegrid.github.io/docs/_app",
	assets: new Set([".nojekyll","cellularNoise.png","dashboard.png","favicon.png","robots.txt","simplexNoise.png","simplexRNoise.png","text.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.fead48ca.js","app":"_app/immutable/entry/app.f209781d.js","imports":["_app/immutable/entry/start.fead48ca.js","_app/immutable/chunks/index.b8c32cc7.js","_app/immutable/chunks/singletons.62d1d1bb.js","_app/immutable/chunks/index.497fad04.js","_app/immutable/entry/app.f209781d.js","_app/immutable/chunks/index.b8c32cc7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
