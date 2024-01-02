/* eslint-disable no-unused-vars */
import imagePieSmall from '../assets/pie-small.png';
import imagePiggyBankSmall from '../assets/pig-small.png';
import imageLightBulbSMall from '../assets/light-bulb-small.png';
import imageCloudSmall from '../assets/cloud-small.png';
import imageFamilySmall from '../assets/family2-small.png';

import imagePieBig from '../assets/pie-big.png';
import imagePiggyBankBig from '../assets/pig-big.png';
import imageLightBulbBig from '../assets/light-bulb-big.png';
import imageCloudBig from '../assets/cloud-big.png';
import imageFamilyBig from '../assets/family-big.jpg';

import imageCustomer1 from '../assets/customers/jimmy.jpg'
import imageCustomer2 from '../assets/customers/jurica.jpg'
import imageCustomer3 from '../assets/customers/philip.jpg'
import imageCustomer4 from '../assets/customers/stephanie.jpg'

import imageChart1 from '../assets/customers/chart1.webp'
import imageChart2 from '../assets/customers/chart2.webp'

export const CARDS_INFO = [
  {
    id: '1C',
    front: {
      img: imagePieSmall,
      imgAlt: 'Image of a pie chart',
      title: 'Monthly budget for your household',
      description: 'Manage your household expenses effectively with our monthly budget tracker. Keep track of your income and expenses to ensure financial stability.'
    },
    back: {
      icon: 'pie-chart-outline',
      description: 'Our monthly budget tracker provides a comprehensive overview of your household\'s financial health. It allows you to input various income sources and track different types of expenses, from groceries to utility bills. With visual representations of your spending habits, you can easily identify areas where you might be overspending and make necessary adjustments. The tracker also helps you set and achieve savings goals, making it easier to plan for future expenses or investments. Remember, a well-managed budget is the first step towards financial freedom. 💰'
      // Start using our monthly budget tracker today and take control of your household finances. 
    }
  },
  {
    id: '2C',
    front: {
      img: imagePiggyBankSmall,
      imgAlt: 'Image of a piggy bank',
      title: 'Set up family savings goals',
      description: 'Plan for the future with our family savings goals feature. Set targets, track progress, and achieve your financial dreams.'
    },
    back: {
      icon: 'wallet-outline',
      description: 'Our family savings goals feature is designed to help you plan for the future. Whether you\'re saving for a family vacation, a new home, or your children\'s education, this feature allows you to set specific financial goals and track your progress towards achieving them. You can input the amount you want to save, set a timeline, and the feature will calculate how much you need to save each month. It also provides a visual representation of your progress, making it easy to see how close you are to reaching your goal. Plus, it offers tips and advice on how to save more effectively. 💰'
      // Start setting up your family savings goals today and take a step closer to realizing your financial dreams. 
    }
  },
  {
    id: '3C',
    front: {
      img: imageLightBulbSMall,
      imgAlt: 'Image of a light bulb',
      title: 'Get personalized tips and insights',
      description: 'Unlock your financial potential with personalized tips and insights tailored to your spending habits and savings goals.'
    },
    back: {
      icon: 'bulb-outline',
      description: 'Our feature of personalized tips and insights is like having a financial advisor in your pocket. Based on your income, expenses, and savings goals, it provides customized advice to help you manage your finances more effectively. From tips on reducing unnecessary expenses to insights on investment opportunities, this feature covers a wide range of financial aspects. It also learns from your spending habits over time, continually refining and personalizing the advice it provides. With these insights, you can make informed decisions and develop strategies that align with your financial goals. 💰'
      // Start exploring personalized tips and insights today and empower yourself to make smarter financial decisions. 
    }
  },
  {
    id: '4C',
    front: {
      img: imageCloudSmall,
      imgAlt: 'Image of a cloud services',
      title: 'Access your data from any device',
      description: 'Stay connected with your finances. Access your data anytime, anywhere, from any device with our cross-platform compatibility.'
    },
    back: {
      icon: 'cloud-done-outline',
      description: 'Our feature of accessing data from any device ensures that you have your financial information at your fingertips, no matter where you are or what device you\'re using. Whether you\'re on your home computer, your laptop, or your mobile device, you can log in to your account and view your expenses, track your savings goals, and get personalized insights. This feature is designed with a focus on security and privacy, ensuring that your data is protected while still being easily accessible to you. It also syncs your data across devices in real-time, so your financial information is always up-to-date. 💰'
      // Start accessing your data from any device today and stay connected with your finances on the go. 
    }
  },
  {
    id: '5C',
    front: {
      img: imageFamilyBig,
      imgAlt: 'Image of a happy family',
      title: 'Share progress with your family',
      // title: 'Share your progress with your family',
      description: 'Keep your family in the loop. Share your financial progress and celebrate milestones together with our easy sharing feature.'
    },
    back: {
      icon: 'people-outline',
      description: 'Our feature of sharing progress with your family makes financial management a collaborative effort. It allows you to share updates on your income, expenses, and savings goals with your family members, fostering transparency and mutual accountability. Whether it\'s reaching a savings goal or reducing monthly expenses, every achievement can be celebrated together. This feature also promotes financial literacy among family members, especially children, by involving them in the process. Security measures to ensure your financial information remains private and secure. 💰'
      // Start sharing your progress with your family today and make financial management a family affair. 
    }
  },
];

export const HERO_BULLETS = [
  {
    id: '1b',
    icon: 'pie-chart-outline',
    bulletText: 'Monthly budget for your household'
  },
  {
    id: '2b',
    icon: 'wallet-outline',
    bulletText: 'Set up family savings goals'
  },
  {
    id: '3b',
    icon: 'bulb-outline',
    bulletText: 'Get personalized tips and insights'
  },
  {
    id: '4b',
    icon: 'cloud-done-outline',
    bulletText: 'Access your data from any device'
  },
  {
    id: '5b',
    icon: 'people-outline',
    bulletText: 'Share your progress with your family'
  },
]

export const CUSTOMERS = [
  {
    id: 'cus1',
    testimonial: '“Expenser is a lifesaver. It scans and records my receipts, links my accounts, and reminds me of bills. It\'s like having a personal accountant in my pocket.” - Lisa, 28',
    image: imageCustomer1,
    imageAlt: 'A jung woman with beautiful green eyes and a brown hair.'
  },
  {
    id: 'cus2',
    testimonial: '“Expenser is the best app for family finances. I can see and share our expenses with my spouse, and we can stay on top of our budget. Expenser keeps our family organized and transparent.” - David, 42',
    image: imageCustomer2,
    imageAlt: 'A good looking middle age man dressed with shirt and sweater'
  },
  {
    id: 'cus3',
    testimonial: '“Expenser is awesome! It\'s so easy to use and it helps me manage my money better. I can set up budgets, track my spending, and save more.” - Anna, 34',
    image: imageCustomer4,
    imageAlt: 'A beautiful woman with brown hair dressed in black'
  },
  {
    id: 'cus4',
    testimonial: '“Expenser is amazing. It\'s a powerful and user-friendly app that helps me control my finances. I can create goals, view reports, and sync my accounts. Expenser is the ultimate app for personal finance.” - Kevin, 37',
    image: imageCustomer3,
    imageAlt: 'A middle age man with red hat and a black sweater'
  }
]