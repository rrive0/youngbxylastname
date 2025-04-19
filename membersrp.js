// member.js
const members = [
  { name: "Nonx Threethousand", fbId: "100092972023302#" },
  { name: "Jox Jutistory", fbId: "lakksjslal.ksksiksks" },
  { name: "Alex Lorying", "fbId": "alex.winterfell.vega#" },
  { name: "Archi Godyouknow", fbId: "100093095881560#" },
  { name: "Flash Youngbxy", fbId: "flash.stackthatrack#" },
  { name: "Justmin Youngbxy", fbId: "100088887603176#" },
  { name: "Hopex Xers", fbId: "Staywithhopex#" },
  { name: "Hyz Xers", fbId: "100088940505880#" },
  { name: "Jabby Xers", fbId: "JabbyColinfirth#" },
  { name: "Jaylix Youngbxy", fbId: "jaylix.stackthatrack#" },
  { name: "Jayz Jayz Jayz Jayz", fbId: "jayz.jayz.jayz.jayz.2024#" },
  { name: "Jett Jett", fbId: "chkInwzaeiei#" },
  { name: "Kim Kim Kim Kim", fbId: "kim.realnocap#" },
  { name: "North Youngbxy", fbId: "North1144#" },
  { name: "Owen Dernraeng", fbId: "owen.xers#" },
  { name: "Padthai Dernraeng", fbId: "100094298440057#" },
  { name: "Phatt Xers", fbId: "phatt.xers#" },
  { name: "Shazam Diff", fbId: "teerapat.chanbaen#" },
  { name: "Star Youngbxy", fbId: "star.youngbxy#" },
  { name: "Zegame Youngbxy", fbId: "zegame.shaw#" },
  { name: "Johnsnow Youngbxy", fbId: "jonsnow.versegod#" }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("group");
  if (selectEl) {
    members.forEach(member => {
      const option = document.createElement("option");
      option.value = member.name;
      option.textContent = member.name;
      selectEl.appendChild(option);
    });
  }
});
