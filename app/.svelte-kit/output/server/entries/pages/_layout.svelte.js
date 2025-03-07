import "clsx";
import { k as spread_attributes, l as clsx } from "../../chunks/index.js";
function Center($$payload, $$props) {
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
        "flex flex-col items-center justify-center",
        className
      ]),
      ...rest
    }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="flex min-h-screen flex-col pb-16"><div class="h-16 w-full border-b"></div> `;
  Center($$payload, {
    class: "grow",
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
