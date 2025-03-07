import { k as spread_attributes, l as clsx, q as bind_props, t as element, o as escape_html, j as pop, p as push } from "../../chunks/index.js";
import "clsx";
import { makeApi, Zodios } from "@zodios/core";
import { z } from "zod";
const UserRole = z.enum(["Admin", "Moderator", "User"]);
const User = z.object({ id: z.string().uuid(), role: UserRole, email: z.string(), first_name: z.string().optional(), last_name: z.string().optional(), is_active: z.boolean(), created_at: z.string().datetime({ offset: true }), updated_at: z.string().datetime({ offset: true }) }).passthrough();
const RegisterUser = z.object({ email: z.string().max(100).email(), first_name: z.string().max(50).optional(), last_name: z.string().max(50).optional(), password: z.string().min(7).max(72) }).passthrough();
const AuthResponse = z.object({ message: z.string(), token: z.string() }).passthrough();
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
      }
    ],
    response: AuthResponse
  },
  {
    method: "get",
    path: "/auth/user",
    alias: "getAuthuser",
    requestFormat: "json",
    response: User
  },
  {
    method: "get",
    path: "/demo/hello",
    alias: "getDemohello",
    requestFormat: "json",
    response: z.string()
  },
  {
    method: "get",
    path: "/users",
    alias: "getUsers",
    requestFormat: "json",
    response: z.array(User)
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
      }
    ],
    response: User
  }
]);
new Zodios(endpoints);
function createApiClient(baseUrl, options) {
  return new Zodios(baseUrl, endpoints, options);
}
createApiClient("http://localhost:3000");
function Card($$payload, $$props) {
  let {
    class: className,
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx([
        "bg-card text-card-foreground rounded-lg border shadow-sm",
        className
      ]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function Card_content($$payload, $$props) {
  let {
    class: className,
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(["p-6", className]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function Card_description($$payload, $$props) {
  let {
    class: className,
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<p${spread_attributes(
    {
      class: clsx(["text-muted-foreground text-sm", className]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></p>`;
}
function Card_footer($$payload, $$props) {
  let {
    class: className,
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx(["flex items-center p-6 pt-0", className]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function Card_header($$payload, $$props) {
  let {
    class: className,
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<div${spread_attributes(
    {
      class: clsx([
        "flex flex-col space-y-1.5 p-6 pb-0",
        className
      ]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className });
}
function Card_title($$payload, $$props) {
  let {
    class: className,
    children,
    tag = "h3",
    $$slots,
    $$events,
    ...rest
  } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes(
        {
          class: clsx([
            "text-lg leading-none font-semibold tracking-tight",
            className
          ]),
          ...rest
        }
      )}`;
    },
    () => {
      children?.($$payload);
      $$payload.out += `<!---->`;
    }
  );
}
function Link($$payload, $$props) {
  let {
    class: className,
    children,
    href,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  $$payload.out += `<a${spread_attributes(
    {
      href,
      class: clsx(["text-info underline", className]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></a>`;
}
function _page($$payload, $$props) {
  push();
  let message = "Loading...";
  $$payload.out += `<!---->`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(message)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->It's garlic time!`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          Link($$payload3, {
            href: "https://github.com/eatenpancreas/svelte-rs",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Repository`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_footer($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->🧄`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
