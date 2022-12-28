import {
  Pancake,
  Bravery,
  Brilliance,
  Male,
  Female,
  Planet,
  Logo,
  NatePfp
} from "./assets/imgs";

// Demo Friends 
const myFriends = [
  {
    friendAvatar: Planet,
    friendName: "Luke",
    friendIsFav: true
  },
  {
    friendAvatar: Male,
    friendName: "Jim",
    friendIsFav: false
  },
  {
    friendAvatar: Pancake,
    friendName: "Pam",
    friendIsFav: false
  },
  {
    friendAvatar: Bravery,
    friendName: "Dwight",
    friendIsFav: false
  },
  {
    friendAvatar: Brilliance,
    friendName: "Halp",
    friendIsFav: false
  },
  {
    friendAvatar: Female,
    friendName: "Clem",
    friendIsFav: false
  },
  {
    friendAvatar: Male,
    friendName: "Steve",
    friendIsFav: false
  },
];

// Demo Explore Results
const exploreResults = [
  {
    resultAvatar: Planet,
    resultName: "TDG Nate",
    resultStatue: "Christian Nathaniel McIlvenny",
    resultsReps: 1200
  },
  {
    resultAvatar: Bravery,
    resultName: "Bobby123",
    resultStatue: "Bob Ross",
    resultsReps: 1150
  },
  {
    resultAvatar: Brilliance,
    resultName: "TDGLU",
    resultStatue: "Luke McIlveny",
    resultsReps: 2300
  },
  {
    resultAvatar: Pancake,
    resultName: "Michael2000",
    resultStatue: "Michael Scott",
    resultsReps: 1500
  },
  {
    resultAvatar: Female,
    resultName: "avni0000patel",
    resultStatue: "Avni Patel",
    resultsReps: 1250
  },
  {
    resultAvatar: Logo,
    resultName: "Train123",
    resultStatue: "Big",
    resultsReps: 1233
  },
  {
    resultAvatar: NatePfp,
    resultName: "nate42445",
    resultStatue: "Real Nate",
    resultsReps: 1199
  },
];

// Nate's Connections
const natesConnections = [
  {
    peerImg: Pancake,
    peerName: "Luke McIlvenny",
    peerLink: "https://github.com/TDGLU"
  },
  {
    peerImg: Bravery,
    peerName: "Frank McIlvenny",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Brilliance,
    peerName: "Rose McIlvenny",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Male,
    peerName: "Cylde McIlvenny",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Pancake,
    peerName: "Bonnie McIlvenny",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Female,
    peerName: "John Doe",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Logo,
    peerName: "Tony Q",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Bravery,
    peerName: "Gil E",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
  {
    peerImg: Male,
    peerName: "Cesar I",
    peerLink: "https://en.wikipedia.org/wiki/Naughty_Bear"
  },
];

// Nate's Data for profile Statue 
const NateData = {
  headline: "Software Engineer",
  location: "Perris, CA",
  company: "TDG",
  bday: "Apr 8, 2003"
};

// Nate's demo social links data
const natesSocialLinks = [
  {
    userSocialLink: "https://github.com/TDGNate",
    userSocialPlatform: "github",
    userSocialName: "TDGNate"
  },
  {
    userSocialLink: "https://www.linkedin.com/in/christian-mcilvenny/",
    userSocialPlatform: "linkedin",
    userSocialName: "christian-mcilvenny"
  },
  {
    userSocialLink: "https://discordapp.com/users/276568445796220928",
    userSocialPlatform: "discord",
    userSocialName: "Nate#2000"
  },
  {
    userSocialLink: "https://www.instagram.com/imnzte/",
    userSocialPlatform: "instagram",
    userSocialName: "imnzte"
  },
  {
    userSocialLink: "itsnzte@gmail.com",
    userSocialPlatform: "email",
    userSocialName: "itsnzte"
  },
  {
    userSocialLink: "https://www.facebook.com/tdg.nate.7/",
    userSocialPlatform: "facebook",
    userSocialName: "tdgnate"
  },
  {
    userSocialLink: "https://natemci.com/",
    userSocialPlatform: "jeff",
    userSocialName: "Nate"
  },
];

// Richest people top 5
const data = [
  // { rank: 6, name: "Nate M", money: 43000, country: "United States", image: "https://natemci.com/static/media/Nate1.8cbd5164f1a9ecaea636.png" },
  { rank: 1, name: "Luke M", money: 67430, country: "United States", image: "https://natemci.com/static/media/insomnia.ce01d16f9e95615eacda.png" },
  { rank: 3, name: "Cesar I", money: 49864, country: "United States", image: "https://media.discordapp.net/attachments/714743549962223697/1047983067412828230/7f126b252e2c8e8ebb546ab9d9050e85.png" },
  { rank: 4, name: "Gil E", money: 49718, country: "United States", image: "https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" },
  { rank: 5, name: "Tony Q", money: 49135, country: "United States", image: "https://avatars.githubusercontent.com/u/99701688?v=4" },
  { rank: 2, name: "Avni", money: 53087, country: "United States", image: Female },
];

// All Richest People 
const allDemoRichestData = [
  { rank: 6, name: "Nate M", money: 43000, country: "United States", image: "https://natemci.com/static/media/Nate1.8cbd5164f1a9ecaea636.png" },
  { rank: 1, name: "Luke M", money: 67430, country: "United States", image: "https://natemci.com/static/media/insomnia.ce01d16f9e95615eacda.png" },
  { rank: 3, name: "Cesar I", money: 49864, country: "United States", image: "https://media.discordapp.net/attachments/714743549962223697/1047983067412828230/7f126b252e2c8e8ebb546ab9d9050e85.png" },
  { rank: 4, name: "Gil E", money: 49718, country: "United States", image: "https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" },
  { rank: 5, name: "Tony Q", money: 49135, country: "United States", image: "https://avatars.githubusercontent.com/u/99701688?v=4" },
  { rank: 2, name: "Avni", money: 53087, country: "United States", image: Female },
  { rank: 7, name: "Bobby", money: 42010, country: "United States", image: Male },
  { rank: 8, name: "Steve C", money: 41045, country: "United States", image: Planet },
  { rank: 9, name: "Clementine", money: 40541, country: "United States", image: Brilliance },
  { rank: 10, name: "Jim Pal", money: 31456, country: "United States", image: Pancake },
];

export {
  data,
  NateData,
  myFriends,
  exploreResults,
  natesSocialLinks,
  natesConnections,
  allDemoRichestData,
};