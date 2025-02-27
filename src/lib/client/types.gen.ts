// This file is auto-generated by @hey-api/openapi-ts

export type GetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/';
};

export type GetResponses = {
    200: string;
};

export type GetResponse = GetResponses[keyof GetResponses];

export type GetEchoData = {
    body: string;
    path?: never;
    query?: never;
    url: '/echo';
};

export type GetEchoResponses = {
    200: string;
};

export type GetEchoResponse = GetEchoResponses[keyof GetEchoResponses];

export type GetCustomerCustomerIdData = {
    body?: never;
    path: {
        customer_id: string;
    };
    query?: never;
    url: '/customer/:customer_id';
};

export type GetCustomerCustomerIdResponses = {
    200: string;
};

export type GetCustomerCustomerIdResponse = GetCustomerCustomerIdResponses[keyof GetCustomerCustomerIdResponses];

export type ClientOptions = {
    baseUrl: 'http://localhost:3000' | (string & {});
};