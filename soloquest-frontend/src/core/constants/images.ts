import.meta.glob;


const modules = import.meta.glob(
  "@/assets/icons/*.svg",
  { eager: true, import: "default" }
);

const IMAGES = Object.fromEntries(
  Object.entries(modules).map(([path, file]) => {
    const name = path
      .split("/")
      .pop()!
      .replace(".svg", "")
      .replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // kebab → camelCase

    return [name, file];
  })
) as Record<string, string>;

export default IMAGES;
