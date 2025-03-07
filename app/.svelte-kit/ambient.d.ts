
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const rvm_use_flag: string;
	export const rvm_bin_path: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const GEM_HOME: string;
	export const rvm_quiet_flag: string;
	export const ANDROID_HOME: string;
	export const TERM: string;
	export const rvm_gemstone_url: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const rvm_docs_type: string;
	export const IRBRC: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TERM_PROGRAM_VERSION: string;
	export const FPATH: string;
	export const WINDOWID: string;
	export const MY_RUBY_HOME: string;
	export const rvm_hook: string;
	export const ZSH: string;
	export const npm_config_local_prefix: string;
	export const PNPM_HOME: string;
	export const NDK_HOME: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const rvm_gemstone_package_file: string;
	export const COMMAND_MODE: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const rvm_proxy: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const rvm_ruby_file: string;
	export const LSCOLORS: string;
	export const rvm_prefix: string;
	export const rvm_silent_flag: string;
	export const rvm_ruby_make: string;
	export const PATH: string;
	export const _: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const JAVA_HOME: string;
	export const npm_lifecycle_event: string;
	export const rvm_sdk: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const XPC_FLAGS: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const rvm_version: string;
	export const rvm_pretty_print_flag: string;
	export const SHLVL: string;
	export const HOME: string;
	export const rvm_script_name: string;
	export const rvm_ruby_mode: string;
	export const HOMEBREW_PREFIX: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const rvm_alias_expanded: string;
	export const GEM_PATH: string;
	export const ZED_TERM: string;
	export const npm_config_user_agent: string;
	export const rvm_nightly_flag: string;
	export const rvm_ruby_make_install: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const rvm_niceness: string;
	export const rvm_ruby_bits: string;
	export const rvm_bin_flag: string;
	export const RUBY_VERSION: string;
	export const rvm_only_path_flag: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		rvm_use_flag: string;
		rvm_bin_path: string;
		TERM_PROGRAM: string;
		NODE: string;
		GEM_HOME: string;
		rvm_quiet_flag: string;
		ANDROID_HOME: string;
		TERM: string;
		rvm_gemstone_url: string;
		SHELL: string;
		TMPDIR: string;
		rvm_docs_type: string;
		IRBRC: string;
		HOMEBREW_REPOSITORY: string;
		TERM_PROGRAM_VERSION: string;
		FPATH: string;
		WINDOWID: string;
		MY_RUBY_HOME: string;
		rvm_hook: string;
		ZSH: string;
		npm_config_local_prefix: string;
		PNPM_HOME: string;
		NDK_HOME: string;
		USER: string;
		LS_COLORS: string;
		rvm_gemstone_package_file: string;
		COMMAND_MODE: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		rvm_proxy: string;
		npm_execpath: string;
		PAGER: string;
		rvm_ruby_file: string;
		LSCOLORS: string;
		rvm_prefix: string;
		rvm_silent_flag: string;
		rvm_ruby_make: string;
		PATH: string;
		_: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		PWD: string;
		JAVA_HOME: string;
		npm_lifecycle_event: string;
		rvm_sdk: string;
		npm_package_name: string;
		LANG: string;
		XPC_FLAGS: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		rvm_version: string;
		rvm_pretty_print_flag: string;
		SHLVL: string;
		HOME: string;
		rvm_script_name: string;
		rvm_ruby_mode: string;
		HOMEBREW_PREFIX: string;
		LESS: string;
		LOGNAME: string;
		ALACRITTY_WINDOW_ID: string;
		rvm_alias_expanded: string;
		GEM_PATH: string;
		ZED_TERM: string;
		npm_config_user_agent: string;
		rvm_nightly_flag: string;
		rvm_ruby_make_install: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		rvm_niceness: string;
		rvm_ruby_bits: string;
		rvm_bin_flag: string;
		RUBY_VERSION: string;
		rvm_only_path_flag: string;
		COLORTERM: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
