import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";




const UserRole = z.enum(["Admin", "Moderator", "User"]);
const User = z.object({ id: z.string().uuid(), role: UserRole, email: z.string(), first_name: z.string().optional(), last_name: z.string().optional(), is_active: z.boolean(), created_at: z.string().datetime({ offset: true }), updated_at: z.string().datetime({ offset: true }) }).passthrough();
const RegisterUser = z.object({ email: z.string().max(100).email(), first_name: z.string().max(50).optional(), last_name: z.string().max(50).optional(), password: z.string().min(7).max(72) }).passthrough();
const AuthResponse = z.object({ message: z.string(), token: z.string() }).passthrough();

export const schemas = {
	UserRole,
	User,
	RegisterUser,
	AuthResponse,
};

const endpoints = makeApi([
	{
		method: "post",
		path: "/auth/register",
		alias: "postAuthregister",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: RegisterUser
			},
		],
		response: AuthResponse,
	},
	{
		method: "get",
		path: "/auth/user",
		alias: "getAuthuser",
		requestFormat: "json",
		response: User,
	},
	{
		method: "get",
		path: "/demo/hello_from_rust",
		alias: "getDemohello_from_rust",
		requestFormat: "json",
		response: z.string(),
	},
	{
		method: "get",
		path: "/users",
		alias: "getUsers",
		requestFormat: "json",
		response: z.array(User),
	},
	{
		method: "get",
		path: "/users/:user_id",
		alias: "getUsersUser_id",
		requestFormat: "json",
		parameters: [
			{
				name: "user_id",
				type: "Path",
				schema: z.string().uuid()
			},
		],
		response: User,
	},
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
    return new Zodios(baseUrl, endpoints, options);
}
