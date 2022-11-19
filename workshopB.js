const users = [
  {
    nickname: "Never",
    hobby: "sleep",
    postcode: "10250",
  },
  {
    nickname: "Gonna",
    hobby: "eat",
    postcode: "10251",
  },
  {
    nickname: "Give",
    hobby: "play",
    postcode: "10252",
  },
  {
    nickname: "You",
    hobby: "walk",
    postcode: "10253",
  },
  {
    nickname: "Up",
    hobby: "sleep",
    postcode: "10254",
  },
];

for (const u of users) {
  const info = `My nickname is ${u.nickname}, my hobby is ${u.hobby} and my postcode is ${u.postcode}`;
  console.log(info);
}
