import img1 from "../assets/estate.png";
import img2 from "../assets/estate2.jpg";
import img3 from "../assets/estate3.jpg";
import img4 from "../assets/estate4.jpg";

export const properties = [
  {
    img: img1,
    _id: crypto.randomUUID(),
    type: "Beach",
    price: 150000,
    sqfeet: 2000,
    desc: "best property here in VA Beach",
    beds: 4,
    currentOwner: "63e52a4cc0ca227a26de5161",
    State: "Virginia",
  },
  {
    img: img2,
    _id: crypto.randomUUID(),
    type: "singleFamily",
    price: 250000,
    sqfeet: 3000,
    desc: "best property here in DC",
    beds: 3,
    currentOwner: "63e52a4cc0ca227a26de5161",
    State: "Washington DC",
  },
  {
    img: img3,
    _id: crypto.randomUUID(),
    type: "Villa",
    price: 500000,
    sqfeet: 4000,
    desc: "best property here in VA",
    beds: 6,
    currentOwner: "63e52a4cc0ca227a26de5161",
    State: "Virginia",
  },
  {
    img: img4,
    _id: crypto.randomUUID(),
    type: "TownHouse",
    price: 175000,
    sqfeet: 1500,
    desc: "best property here in MD",
    beds: 2,
    currentOwner: "63e52a4cc0ca227a26de5161",
    State: "Maryland",
  },
];
