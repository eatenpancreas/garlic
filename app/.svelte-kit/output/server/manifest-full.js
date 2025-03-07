export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D7jD6Wxq.js",app:"_app/immutable/entry/app.BJUe6gzO.js",imports:["_app/immutable/entry/start.D7jD6Wxq.js","_app/immutable/chunks/CrNT67K5.js","_app/immutable/chunks/CT6-RewN.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DcRgsh3h.js","_app/immutable/entry/app.BJUe6gzO.js","_app/immutable/chunks/CT6-RewN.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/ILg1YOS3.js","_app/immutable/chunks/BbttlLRP.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/U8jWIgNT.js","_app/immutable/chunks/Bc36BeEN.js","_app/immutable/chunks/DcRgsh3h.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
