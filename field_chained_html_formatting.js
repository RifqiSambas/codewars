let Format = { tags: ["div", "h1", "p", "span"] };

const make = (container, chain) => {
  container = container || {};
  chain = chain || [];
  let method = (...text) =>
    chain.reduce((inner, tag) => `<${tag}>${inner}</${tag}>`, text.join(""));
  Format.tags.forEach((tag) => {
    Object.defineProperty(container, tag, {
      get: () => make(undefined, [tag, ...chain]),
    });
  });
  Object.assign(method, container);
  Object.setPrototypeOf(method, container);
  return method;
};

const form = make(Format);
