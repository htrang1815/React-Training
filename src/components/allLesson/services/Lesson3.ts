import { SexType, faker } from "@faker-js/faker";

const Lesson3Data = () => {
  type SubscriptionTier = "free" | "basic" | "business";
  interface User {
    _id: string;
    avatar: string;
    age: number;
    birthday: Date;
    email: string;
    firstName: string;
    address: string;
    lastName: string;
    jobArea: string;
    phone: string;
    sex: SexType;
    subscriptionTier: SubscriptionTier;
  }

  function createRandomUser(i: any): User {
    const date = new Date();
    const birthday = faker.date.birthdate();
    return {
      _id: i,
      avatar: faker.image.avatar(),
      birthday,
      age: date.getFullYear() - birthday.getFullYear(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      sex: faker.person.sexType(),
      phone: faker.phone.number(),
      jobArea: faker.person.jobArea(),
      subscriptionTier: faker.helpers.arrayElement([
        "free",
        "basic",
        "business",
      ]),
    };
  }
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push(createRandomUser(i + 1));
  }
  return data;
};
export default Lesson3Data;
