export const routerMatcher = (path: string) => {
  let route = "";
  const aboutPattern = /\//;
  const projectsPattern = /\/projects/;
  const skillsPattern = /\/skills/;
  const blogsPattern = /\/blogs/;
  const contactPattern = /\/contact/;

  if (aboutPattern.test(path)) route = "about";
  else if (projectsPattern.test(path)) route = "projects";
  else if (skillsPattern.test(path)) route = "skills";
  else if (blogsPattern.test(path)) route = "blogs";
  else if (contactPattern.test(path)) route = "contact";

  return route;
};
