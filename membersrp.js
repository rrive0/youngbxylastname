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
  { name: "Johnsnow Youngbxy", fbId: "jonsnow.versegod#" },
  { name: "Fongwin Youngbxy", fbId: "fongwin.youngbxy" },
  { name: "Jasper Youngbxy", fbId: "jasper.youngbxy" },
  { name: "Jfew Youngbxy", fbId: "100084693087787" },
  { name: "Porchi Youngbxy", fbId: "porchiyoungbxy" },
  { name: "Tim Youngbxy", fbId: "61572834155901" },
  { name: "Mersis Youngbxy", fbId: "193985213725811" },
  { name: "Aomkod Youngbxy", fbId: "100086223190590" },
  { name: "Waffle Youngbxy", fbId: "100088828847652" },
  { name: "Jaywin Youngbxy", fbId: "100077533402083" },
  { name: "JaoPoom Youngbxy", fbId: "jaopoom.jaopoom.jaopoom" },
  { name: "Jaykorb Youngbxy", fbId: "100089167451479" },
  { name: "Daff Youngbxy", fbId: "daff.daff.daff.2024#" },
  { name: "Night Youngbxy", fbId: "61554319782586#" },
  { name: "Tim Youngbxy", fbId: "61572834155901#" },
  { name: "Meyou Youngbxy", fbId: "meyou.density.s#" },
  { name: "Scott Scott", fbId: "scott.psaj#" }
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
