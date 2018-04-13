const express = require("express");
const bodyParser = require("body-parser");
const App = express();

App.use(bodyParser.json());

let userExist = [{username: "Oleh", pass: "111"}];

let salesDataYear = [0,40,60,50,30,20,30,30,45,35,55,50,15];
let salesDataMonth = [0,10,12,15,8];
let salesDataWeek = [0,5,4,7,2,8,3,3];

let areaChartWeek = [8, 4, 5, 7, 9, 8, 5];
let areaChartMonth = [12,13,4,9];
let areaChartYear = [11,5,7,12,14,6,12,5,3,12,8,11];

const circleDiagramWeek = [
  {
    id: "TotalSales1",
    percent: 75,
    number: 1300,
    kind: "Views"
  },
  {
    id: "TotalSales2",
    percent: 35,
    number: 800,
    kind: "Visitors"
  },
  {
    id: "TotalSales3",
    percent: 62,
    number: 3800,
    kind: "Impressions"
  }
];

const circleDiagramMonth = [
  {
    id: "TotalSales4",
    percent: 55,
    number: 5300,
    kind: "Views"
  },
  {
    id: "TotalSales5",
    percent: 45,
    number: 3800,
    kind: "Visitors"
  },
  {
    id: "TotalSales6",
    percent: 72,
    number: 6800,
    kind: "Impressions"
  }
];

const circleDiagramYear = [
  {
    id: "TotalSales7",
    percent: 88,
    number: 15300,
    kind: "Views"
  },
  {
    id: "TotalSales8",
    percent: 85,
    number: 13800,
    kind: "Visitors"
  },
  {
    id: "TotalSales9",
    percent: 92,
    number: 16800,
    kind: "Impressions"
  }
];


const usersList = [
  {
    id: "user1",
    userId: "4sdr",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userEmail: "lyall_roach@gmail.com",
    userPhone: "+380 000 00 00",
    activeStatus: true
  },
  {
    id: "user2",
    userId: "234sdf",
    userImg: "Img/UsersPhotos/DominicLynton.png",
    userName: "Dominic Lynton",
    userPost: "UX/UI Desinger",
    userEmail: "dominic_lynton@gmail.com",
    userPhone: "+380 111 00 00",
    activeStatus: false
  },
  {
    id: "user3",
    userId: "ds34",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userEmail: "michelle_stewart@gmail.com",
    userPhone: "+380 222 00 00",
    activeStatus: false
  },
  {
    id: "user4",
    userId: "dsdsfs34",
    userImg: "Img/UsersPhotos/DominicLynton.png",
    userName: "Jack Wilshere",
    userPost: "Front and Dev",
    userEmail: "jack_wilshere@gmail.com",
    userPhone: "+380 333 00 00",
    activeStatus: true
  },
  {
    id: "user4",
    userId: "fs3S",
    userImg: "Img/UsersPhotos/JoleneSlater.png",
    userName: "Jolene Slater",
    userPost: "Full Stack Dev",
    userEmail: "jolene_slater@gmail.com",
    userPhone: "+380 444 00 00",
    activeStatus: true
  }

];


const inBoxListMessages = [
  {
    id: "message1",
    userPhoto: "Img/UsersPhotos/MichelleStewart.png",
    name: "Michelle Stewart",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: false
  },
  {
    id: "message2",
    userPhoto: "Img/UsersPhotos/JoleneSlater.png",
    name: "Jolene Slater",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: false
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  },
  {
    id: "message3",
    userPhoto: "Img/UsersPhotos/LyallRoach.png",
    name: "Lyall Roach",
    time: "Today, 5:32 PM",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elisium",
    statusRead: true
  }
];

const projectsList = [
  {
    id: "project1",
    nameProject: "New website",
    nameCompany: "Microsoft",
    price: 2300,
    firstDate: "15 May 2017",
    dateLeft: "10 days left",
    timeSpent: "40 hours",
    progress: 70,
    status: "Development",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project2",
    nameProject: "Landing page",
    nameCompany: "Google",
    price: 1250,
    firstDate: "21 May 2017",
    dateLeft: "25 days left",
    timeSpent: "7 hours",
    progress: 15,
    status: "Planning",
    userImg: "Img/UsersPhotos/DominicLynton.png",
    userName: "Dominic Lynton",
    userPost: "UX/UI Desinger",
    userId: "234sdf"
  },
  {
    id: "project3",
    nameProject: "New dashboard",
    nameCompany: "Symu.co",
    price: 5100,
    firstDate: "15 May 2017",
    dateLeft: "2 days left",
    timeSpent: "56 hours",
    progress: 90,
    status: "Testing",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project4",
    nameProject: "New logo",
    nameCompany: "JCD.pl",
    price: 900,
    firstDate: "15 June 2017",
    dateLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 40,
    status: "Design",
    userImg: "Img/UsersPhotos/DominicLynton.png",
    userName: "Dominic Lynton",
    userPost: "UX/UI Desinger",
    userId: "234sdf"
  },
  {
    id: "project5",
    nameProject: "Landing page",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "8 August 2017",
    dateLeft: "2 months later",
    timeSpent: "0 hours",
    progress: 0,
    status: "Quened",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project6",
    nameProject: "Wordpess theme",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "9th August 2017",
    dateLeft: "2 month later",
    timeSpent: "0 hours",
    progress: 0,
    status: "Quened",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project7",
    nameProject: "Landing page",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "16th August 2017",
    dateLeft: "2 month later",
    timeSpent: "8 hours",
    progress: 15,
    status: "Planning",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project8",
    nameProject: "New website",
    nameCompany: "Symu.co",
    price: 1200,
    firstDate: "29th August 2017",
    dateLeft: "2 month later",
    timeSpent: "5 hours",
    progress: 5,
    status: "Planning",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project9",
    nameProject: "Dashboard",
    nameCompany: "Symu.co",
    price: 1200,
    firstDate: "1th September 2017",
    dateLeft: "3 month later",
    timeSpent: "5 hours",
    progress: 3,
    status: "Planning",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project10",
    nameProject: "Mobile App",
    nameCompany: "Symu.co",
    price: 1800,
    firstDate: "15th September 2017",
    dateLeft: "3 month later",
    timeSpent: "6 hours",
    progress: 9,
    status: "Planning",
    userImg: "Img/UsersPhotos/userPhoto1.png",
    userName: userExist[0].username,
    userPost: "Account",
    userId: "111ogSD"
  },
  {
    id: "project11",
    nameProject: "New logo",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "17th September 2017",
    dateLeft: "3 month later",
    timeSpent: "19 hours",
    progress: 28,
    status: "Design",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project12",
    nameProject: "New website",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "17th September 2017",
    dateLeft: "3 month later",
    timeSpent: "39 hours",
    progress: 30,
    status: "Design",
    userImg: "Img/UsersPhotos/userPhoto1.png",
    userName: userExist[0].username,
    userPost: "Account",
    userId: "111ogSD"
  },
  {
    id: "project12",
    nameProject: "New website",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "21th September 2017",
    dateLeft: "3 month later",
    timeSpent: "19 hours",
    progress: 25,
    status: "Design",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project13",
    nameProject: "Dashboard",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "23th September 2017",
    dateLeft: "3 month later",
    timeSpent: "36 hours",
    progress: 32,
    status: "Design",
    userImg: "Img/UsersPhotos/userPhoto1.png",
    userName: userExist[0].username,
    userPost: "Account",
    userId: "111ogSD"
  },
  {
    id: "project14",
    nameProject: "Mobile App",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "24th September 2017",
    dateLeft: "3 month later",
    timeSpent: "43 hours",
    progress: 87,
    status: "Development",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project14",
    nameProject: "New website",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "27th September 2017",
    dateLeft: "3 month later",
    timeSpent: "49 hours",
    progress: 83,
    status: "Development",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project15",
    nameProject: "Dashboard",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "28th September 2017",
    dateLeft: "3 month later",
    timeSpent: "40 hours",
    progress: 83,
    status: "Development",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project16",
    nameProject: "Landing page",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "1th October 2017",
    dateLeft: "4 month later",
    timeSpent: "26 hours",
    progress: 94,
    status: "Testing",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project17",
    nameProject: "Landing page",
    nameCompany: "Symu.co",
    price: 1600,
    firstDate: "3th October 2017",
    dateLeft: "Completed",
    timeSpent: "26 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project18",
    nameProject: "New website",
    nameCompany: "Symu.co",
    price: 1500,
    firstDate: "1th October 2017",
    dateLeft: "Completed",
    timeSpent: "26 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project19",
    nameProject: "Dashboard",
    nameCompany: "Symu.co",
    price: 1800,
    firstDate: "4th October 2017",
    dateLeft: "Completed",
    timeSpent: "26 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project20",
    nameProject: "Landing page",
    nameCompany: "Google",
    price: 1500,
    firstDate: "8 August 2017",
    dateLeft: "2 months later",
    timeSpent: "0 hours",
    progress: 0,
    status: "Quened",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project21",
    nameProject: "Wordpess theme",
    nameCompany: "Google",
    price: 1500,
    firstDate: "9th August 2017",
    dateLeft: "2 month later",
    timeSpent: "0 hours",
    progress: 0,
    status: "Quened",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project22",
    nameProject: "Landing page",
    nameCompany: "Google",
    price: 1500,
    firstDate: "16th August 2017",
    dateLeft: "2 month later",
    timeSpent: "8 hours",
    progress: 15,
    status: "Planning",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project23",
    nameProject: "New website",
    nameCompany: "Google",
    price: 1200,
    firstDate: "29th August 2017",
    dateLeft: "2 month later",
    timeSpent: "5 hours",
    progress: 5,
    status: "Planning",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project24",
    nameProject: "Dashboard",
    nameCompany: "Google",
    price: 1200,
    firstDate: "1th September 2017",
    dateLeft: "3 month later",
    timeSpent: "5 hours",
    progress: 3,
    status: "Planning",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project25",
    nameProject: "Mobile App",
    nameCompany: "Google",
    price: 1800,
    firstDate: "15th September 2017",
    dateLeft: "3 month later",
    timeSpent: "6 hours",
    progress: 9,
    status: "Planning",
    userImg: "Img/UsersPhotos/userPhoto1.png",
    userName: userExist[0].username,
    userPost: "Account",
    userId: "111ogSD"
  },
  {
    id: "project26",
    nameProject: "New logo",
    nameCompany: "Google",
    price: 1500,
    firstDate: "17th September 2017",
    dateLeft: "3 month later",
    timeSpent: "19 hours",
    progress: 28,
    status: "Design",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project27",
    nameProject: "New website",
    nameCompany: "Google",
    price: 1500,
    firstDate: "17th September 2017",
    dateLeft: "3 month later",
    timeSpent: "39 hours",
    progress: 30,
    status: "Design",
    userImg: "Img/UsersPhotos/userPhoto1.png",
    userName: userExist[0].username,
    userPost: "Account",
    userId: "111ogSD"
  },
  {
    id: "project28",
    nameProject: "New website",
    nameCompany: "Google",
    price: 1500,
    firstDate: "21th September 2017",
    dateLeft: "3 month later",
    timeSpent: "19 hours",
    progress: 25,
    status: "Design",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project29",
    nameProject: "Mobile App",
    nameCompany: "Google",
    price: 1500,
    firstDate: "24th September 2017",
    dateLeft: "3 month later",
    timeSpent: "43 hours",
    progress: 87,
    status: "Development",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project30",
    nameProject: "New website",
    nameCompany: "Google",
    price: 1500,
    firstDate: "27th September 2017",
    dateLeft: "3 month later",
    timeSpent: "49 hours",
    progress: 83,
    status: "Development",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project31",
    nameProject: "Dashboard",
    nameCompany: "Google",
    price: 1500,
    firstDate: "28th September 2017",
    dateLeft: "3 month later",
    timeSpent: "40 hours",
    progress: 83,
    status: "Development",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project32",
    nameProject: "Landing page",
    nameCompany: "Google",
    price: 1500,
    firstDate: "1th October 2017",
    dateLeft: "4 month later",
    timeSpent: "26 hours",
    progress: 94,
    status: "Testing",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project33",
    nameProject: "Landing page",
    nameCompany: "Google",
    price: 1600,
    firstDate: "3th October 2017",
    dateLeft: "Completed",
    timeSpent: "26 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/LyallRoach.png",
    userName: "Lyall Roach",
    userPost: "Front and Dev",
    userId: "4sdr"
  },
  {
    id: "project34",
    nameProject: "New website",
    nameCompany: "Google",
    price: 1500,
    firstDate: "1th October 2017",
    dateLeft: "Completed",
    timeSpent: "26 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project700",
    nameProject: "Mobile app",
    nameCompany: "Facebook",
    price: 4300,
    firstDate: "5th May 2017",
    dateLeft: "Completed",
    timeSpent: "59 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  },
  {
    id: "project800",
    nameProject: "Landing page",
    nameCompany: "Themeforest",
    price: 1300,
    firstDate: "2th May 2017",
    dateLeft: "Completed",
    timeSpent: "30 hours",
    progress: 100,
    status: "Completed",
    userImg: "Img/UsersPhotos/MichelleStewart.png",
    userName: "Michelle Stewart",
    userPost: "Account",
    userId: "ds34"
  }
];


const messagesInbox = [
  {
    id: "ds34",
    name: "Michelle Stewart",
    read: false,
    img: "Img/UsersPhotos/MichelleStewart.png",
    info: {
      online: false,
      position: "Back End Dev",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
      email: "michellestewart @gmail.com",
      phone: "+48 500 400 300",
      address: "65 Lorem St, Warsaw, PL",
      organization: "Symu.co",
      img: "Img/UsersPhotos/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "4 April 2018 12:32",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      },
      {
        answer: true,
        date: "5 April 2018 4:03",
        text: "Ipsum dolor sit amet"
      },
      {
        answer: false,
        date: "5 April 2018 10:43",
        text: "Ok, Thank you!"
      },
      {
        answer: false,
        date: "6 April 2018, 15:09 PM",
        text: "Hello, i have a problem! Can you help me, please!!!"
      },
      {
        answer: true,
        date: "Today, 5:31 PM",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm."
      },
    ]
  },
  {
    id: "fs3S",
    name: "Jolene Slater",
    read: false,
    img: "Img/UsersPhotos/JoleneSlater.png",
    info: {
      online: true,
      position: "Full Stack Dev",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
      email: "jolene_slater@gmail.com",
      phone: "+48 500 400 300",
      address: "65 Lorem St, Warsaw, PL",
      organization: "Symu.co",
      img: "Img/UsersPhotos/JoleneSlater.png",
      name: "Jolene Slater",
    },
    chat: [
      {
        answer: false,
        date: "3 April 2018 09:43",
        text: "Good Morning! Can i ask you about my project?"
      },
      {
        answer: true,
        date: "3 April 2018 12:05",
        text: "Hello! Your project is not complete! We will work with him!"
      },
      {
        answer: false,
        date: "13 April 2018 12:34",
        text: "Oh, is very good. When my project will completed ?"
      },
      {
        answer: true,
        date: "3 April 2018 12:47",
        text: "Youe project will completed in 2-3 days"
      },
      {
        answer: false,
        date: "3 April 2018 13:14",
        text: "Thank you!!"
      },
    ]
  },
  {
    id: "234sdf",
    name: "Dominic Lynton",
    read: true,
    img: "Img/UsersPhotos/DominicLynton.png",
    info: {
      online: false,
      position: "UX/UI Desinger",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
      email: "dominic_lynton@gmail.com",
      phone: "+380 111 00 00",
      address: "65 Green Park St, Brooklyn, PL",
      organization: "Themeforest",
      img: "Img/UsersPhotos/DominicLynton.png",
      name: "Dominic Lynton",
    },
    chat: [
      {
        answer: false,
        date: "4 April 2018 12:32",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
      {
        answer: true,
        date: "5 April 2018 4:03",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
      {
        answer: false,
        date: "5 April 2018 10:43",
        text: "Ut enim ad minim veniam, quis ullamco labo"
      },
      {
        answer: true,
        date: "Yesterday, 15:09 PM",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
    ]
  },
  {
    id: "4sdr",
    name: "Lyall Roach",
    read: true,
    img: "Img/UsersPhotos/LyallRoach.png",
    info: {
      online: false,
      position: "Front and Dev",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
      email: "lyall_roach@gmail.com",
      phone: "+380 444 00 00",
      address: "12 Indepented Street, 5",
      organization: "Google",
      img: "Img/UsersPhotos/LyallRoach.png",
      name: "Lyall Roach",
    },
    chat: [
      {
        answer: false,
        date: "4 April 2018 12:32",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
      {
        answer: true,
        date: "5 April 2018 4:03",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
      {
        answer: false,
        date: "5 April 2018 10:43",
        text: "Ut enim ad minim veniam, quis ullamco labo"
      },
      {
        answer: false,
        date: "Yesterday, 15:09 PM",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco labo"
      },
    ]
  },
];

const messagesSent = [
  {
    id: "user1",
    name: "Oleh",
    read: false,
    img: "Img/UsersPhotos/userPhoto1.png",
    info: {
      online: false,
      position: "Back End Dev",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
      email: "michellestewart @gmail.com",
      phone: "+48 500 400 300",
      adress: "65 Lorem St, Warsaw, PL",
      organization: "Symu.co",
      img: "Img/UsersPhotos/MichelleStewart.png",
      name: "Michelle Stewart",
    },
    chat: [
      {
        answer: false,
        date: "4 April 2018 16:54",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa q"
      },
      {
        answer: true,
        date: "4 April 2018 17:32",
        text: "Cupidatat non proident, sunt"
      }
    ]
  },
];

//authorization
App.post("/api/user", (req, res) => {
  console.log(req.body);
  console.log("Registration was successfully");
  userExist.push({username: req.body.username, pass: req.body.password});
  return res.json()
});

App.post("/api/auth", (req, res) => {
  const username = req.body.login;
  const pass = req.body.pass;

  let userFilterCheck = userExist.filter((item) => {
    return (item.username === username && item.pass === pass)
  });

  if (userFilterCheck[0] !== undefined) {
    return res.json({
      check: true,
      username: userFilterCheck[0].username
    })
  } else {
    return res.json({check: false});
  }
});

//MessageList
App.get("/api/message/list", (req, res) => {
  return res.json(
      inBoxListMessages
  )
});

//CircleDiagram
App.get("/api/raport/diagram/week", (req, res) => {
  return res.json(
      circleDiagramWeek
  )
});
App.get("/api/raport/diagram/month", (req, res) => {
  return res.json(
      circleDiagramMonth
  )
});
App.get("/api/raport/diagram/year", (req, res) => {
  return res.json(
      circleDiagramYear
  )
});

//InBoxChat
App.get("/api/user/chat/inbox", (req, res) => {
  return res.json(messagesInbox)
});

App.get("/api/user/chat/sent", (req, res) => {
  return res.json(messagesSent)
});

//AreaChart
App.get("/api/raport/area/week", (req, res) => {
  return res.json(
      areaChartWeek
  )
});
App.get("/api/raport/area/month", (req, res) => {
  return res.json(
      areaChartMonth
  )
});
App.get("/api/raport/area/year", (req, res) => {
  return res.json(
      areaChartYear
  )
});

//SalesChart
App.get("/api/sales/year", (req, res) => {
  return res.json(
      salesDataYear
  )
});

App.get("/api/sales/month", (req, res) => {
  return res.json(
      salesDataMonth
  )
});

App.get("/api/sales/week", (req, res) => {
  return res.json(
      salesDataWeek
  )
});

//AllProject
App.get("/api/all/projects", (req, res) => {
  return res.json(
      projectsList
  )
});

//UsersList
App.get("/api/all/users", (req, res) => {
  return res.json(
      usersList
  )
});

App.listen(4000, () => {
  console.log("Server was started");
});

