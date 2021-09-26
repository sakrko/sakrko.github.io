const skills = [
  { id: 1, url: "/images/pngs/django.png" },
  { id: 2, url: "/images/pngs/react.png" },
  { id: 3, url: "/images/pngs/nextjs.png" },
];

const projects = [
  {
    id: 1,
    title: "test1",
    desc: "test data",
    git: "",
    web: "",
    tech_stack: "",
  },
  {
    id: 2,
    title: "test2",
    desc: "test data",
    git: "",
    web: "",
    tech_stack: "",
  },
  {
    id: 3,
    title: "test3",
    desc: "test data",
    git: "",
    web: "",
    tech_stack: "",
  },
];

for (i = 0; skills.length > i; i++) {
  const img = new Image(125, 125);
  img.src = skills[i].url;
  img.style.borderRadius = "50%";
  img.style.padding = "20px";
  img.style.alignItems = "center";

  const src = document.getElementById("skill_images");
  src.appendChild(img);
}

for (i = 0; projects.length > i; i++) {
  const x = document.createElement("div");
  x.className = "card";
  const title = document.createTextNode(projects[i].title);
  title.className = "card_title";
  const desc = document.createTextNode(projects[i].desc);
  desc.className = "card_desc";
  x.appendChild(title);
  x.appendChild(desc);

  const src = document.getElementById("projects");
  src.appendChild(x);
}
