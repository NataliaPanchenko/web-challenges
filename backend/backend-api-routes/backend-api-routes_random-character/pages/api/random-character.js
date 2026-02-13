import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    birthday: chance.birthday(),
    profession: chance.profession(),
    adress: chance.address(),
    phone: chance.phone(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    animal: chance.animal(),
  };

  res.status(200).json(character);
}
