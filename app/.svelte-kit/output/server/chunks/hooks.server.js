const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("theme") || "light";
  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace("<html", `<html class="${theme === "dark" ? "dark" : ""}"`);
    }
  });
};
export {
  handle
};
