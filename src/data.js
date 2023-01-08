// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.jpeg';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.jpg';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.jpeg';
import LogoV2 from '../src/assets/img/new_logo-v2.jpeg';
import HeroImage from '../src/assets/img/hero-image.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Bombe',
    href: '#',
  },
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

export const heroData = {
  title: ` Channapatna Toys`,
  subtitle:
    'We are an Indian, artisan-made, eco-friendly toy brand passionate about making playtime safe, sustainable for children everywhere.',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Find Out A Little More About Us',
  subtitle:
    'All of our products are handmade by the loving hands of artisans. Each piece is made with age-old techniques passed down from generation to generation. We source from artisans that adhere to social and environmental standards including fair wages, community development, and environmental sustainability.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'Channapatna Toys offers unique toys that are sure to inspire your child. Our all-natural heirloom quality toys are carefully crafted of safe, non-toxic materials that run on imagination. Browse our selection of eco-friendly, organic and sustainably harvested wooden toys that provide years of happiness. ',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Payment Done',
      description:
        'Pay with a Visa or PayPal card and without much ado',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Find Your Product',
      description:
        'We offer sales of our products through the Internet..',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Print Out',
      description:
        'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Product Received',
      description:
        'In our app you can see the time of your order Arrival...',
      linkText: 'Learn more',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Manjunath',
    web: 'Founder',
    message:
      '',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Sanjay',
    web: 'Dev Lead',
    message:
      '',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Nikhil',
    web: 'Co-Founder',
    message:
      '',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'We Offer 10-Days hassle free Return',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Bombe, 234 Avenue Street Bengaluru',
  email: 'bombe@channapatna.com',
  phone: '99007 66137',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
   
    {
      name: 'Guide',
      href: '#',
    },
   
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/channapatna_toys_emporium/',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Bombe, 2022. All rights reserved. Company Registration Number: ***.',
  icon: <BsChatDotsFill />,
};
