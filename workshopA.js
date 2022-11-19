const info = {
  name: "Phurit",
  nickname: "Phu",
  hobby: "Coding",
  address: "Bangkok",
  salary: 1_000_000,
  province: {
    province: "Bangkok",
    postcode: 10110,
  },
};

const showInfo = ({ nickname, hobby, province: { postcode } }) =>
  `My nickname is ${nickname}, my hobby is ${hobby} and my postcode is ${postcode}`;

console.log(showInfo(info));
