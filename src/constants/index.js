import CashOnDel from '../assets/icons/cash-on-delivery.png';
import CashOnDel2 from '../assets/icons/cash-on-delivery-1.png';
import CustomerSupport from '../assets/icons/customer-support.png';
import DeliveryTruck from '../assets/icons/delivery-truck.png';
import Heart from '../assets/icons/heart.png';
import Heart_Fill from '../assets/icons/heart-fill.png'
import Rupee from '../assets/icons/rupee.png';
import Rupee1 from '../assets/icons/rupee-1.png';
import Rupee2 from '../assets/icons/rupee-2.png';
import Rupee3 from '../assets/icons/rupee-3.png';
import Sync from '../assets/icons/sync.png';
import Transfer from '../assets/icons/transfer.png'
import Cart from '../assets/icons/cart-regular-24.png';
import Close from '../assets/icons/close.png';
import Gears from '../assets/icons/Gears.png';
import LogIn from '../assets/icons/log-in-regular-24.png';
import LogOut from '../assets/icons/log-out-regular-24.png';
import Menu from '../assets/icons/menu.png';
import SearchImg from '../assets/icons/search-regular-24.png';
import UserImg from '../assets/icons/user.png'
import Back_Arrow from '../assets/icons/back_arrow.png'
import Book_Icon from '../assets/icons/book_icon.png';
import Gadget_Icon from '../assets/icons/gadget.png';
import Game_Controller_Icon from '../assets/icons/game_controller.png';
import Like_Icon from '../assets/icons/like.png';
import Music_Note_Icon from '../assets/icons/music_note.png';
import Star_Icon from '../assets/icons/star.png';
import Protection_Icon from '../assets/icons/protection_icon.png';
import Headphone_Icon from '../assets/icons/headphone_icon.png';
import Smile_Icon from '../assets/icons/smile_icon.png';
import Blank_Star from '../assets/icons/blank_star.png'

import ShowRoom_Day from '../assets/img/showroom-day.webp';
import ShowRoom_Night from '../assets/img/showroom-night.webp';
import Contact_Img from '../assets/contact_img.webp';
import Owner_Img from '../assets/img/Owner.jpg';
import ShopSection from '../assets/img/shopSection.webp';

import People_1 from '../assets/people/people_1.webp';
import People_2 from '../assets/people/people_2.webp';
import People_3 from '../assets/people/people_3.webp';
import People_4 from '../assets/people/people_4.webp';
import People_5 from '../assets/people/people_5.webp';

export const IconImg = { CashOnDel, CashOnDel2, CustomerSupport, DeliveryTruck, Heart, Heart_Fill, Rupee, Rupee1, Rupee2, Rupee3, Sync, Transfer, Cart, Close, Gears, LogIn, LogOut, Menu, SearchImg, UserImg, Back_Arrow, Star_Icon, Book_Icon, Gadget_Icon, Game_Controller_Icon, Like_Icon, Music_Note_Icon, Protection_Icon, Headphone_Icon, Smile_Icon, Blank_Star }

export const Img = { ShowRoom_Day, ShowRoom_Night, Contact_Img, Owner_Img, ShopSection }
export const PeopleImg = { People_1, People_2, People_3, People_4, People_5 }

const linearSlide = [
  { id: 1, name: "Easy Returns Policy", icon: "" },
  { id: 2, name: "Premium Quality Products", icon: '' },
  { id: 3, name: "Expert Guidance", icon: '' },
  { id: 4, name: "Fast Reliable Shipping", icon: '' },
  { id: 5, name: "Secure Payment Options", icon: '' },
  { id: 6, name: "24/7 Customer Support", icon: '' },
  { id: 7, name: "10M + Delivered", icon: '' }
]

const reviews = [
  {
    id: "001",
    userId: "65f1a2b3c4d5e6f7890a1234",
    productId: "65f1b2c3d4e5f6a7890b5678",
    userName: "John Doe",
    rating: 5,
    comment: "I’ve been using this product for a few weeks now and I’m extremely satisfied with the performance. The build quality feels premium, the features work exactly as described, and it exceeded my expectations in daily use. Definitely worth the price and I would highly recommend it to anyone looking for reliability and quality.",
    numReviews: 1,
    reviewDate: new Date("2026-03-20T10:15:00.000Z"),
    createdAt: new Date("2026-02-20T10:15:00.000Z"),
    updatedAt: new Date("2026-02-20T10:15:00.000Z")
  },
  {
    id: "002",
    userId: "65f1a2b3c4d5e6f7890a1235",
    productId: "65f1b2c3d4e5f6a7890b5678",
    userName: "Jane Smith",
    rating: 4,
    comment: "Overall, the product quality is very good and it performs well for most of my needs. The packaging was secure and the setup process was simple. The only downside was that the delivery took slightly longer than expected, but apart from that, I am quite happy with my purchase.",
    numReviews: 2,
    reviewDate: new Date("2026-02-21T14:30:00.000Z"),
    createdAt: new Date("2026-02-21T14:30:00.000Z"),
    updatedAt: new Date("2026-02-21T14:30:00.000Z")
  },
  {
    id: "003",
    userId: "65f1a2b3c4d5e6f7890a1236",
    productId: "65f1b2c3d4e5f6a7890b9999",
    userName: "Michael Lee",
    rating: 3,
    comment: "The product is decent for the price, but there are a few areas that could be improved. While the core functionality works fine, I noticed some minor issues with durability and finishing. It’s not bad, but it’s also not exceptional. Suitable if you’re on a budget.",
    numReviews: 1,
    reviewDate: new Date("2026-02-22T09:45:00.000Z"),
    createdAt: new Date("2026-02-22T09:45:00.000Z"),
    updatedAt: new Date("2026-02-22T09:45:00.000Z")
  },
  {
    id: "004",
    userId: "65f1a2b3c4d5e6f7890a1237",
    productId: "65f1b2c3d4e5f6a7890b9999",
    userName: "Sarah Johnson",
    rating: 2,
    comment: "Unfortunately, my experience with this product was not very positive. The material does not feel as strong as I expected, and after a few uses, I started noticing some wear and tear. It still works, but I’m not fully confident about its long-term durability.",
    numReviews: 3,
    reviewDate: new Date("2026-02-23T16:20:00.000Z"),
    createdAt: new Date("2026-02-23T16:20:00.000Z"),
    updatedAt: new Date("2026-02-23T16:20:00.000Z")
  }
];

const webPageReviews = [
  {
    id: 1,
    name: "Ryan Johnson",
    img: People_1,
    rating: 5,
    comment: "TechItEasy has completely transformed my online shopping experience. The website is super fast, easy to navigate, and the product recommendations feel personalized. I especially love the seamless checkout process and the variety of payment options. Highly recommended for anyone who wants a hassle-free e-commerce experience."
  },
  {
    id: 2,
    name: "Samantha Lee",
    img: People_2,
    rating: 4,
    comment: "Overall, I am very happy with TechItEasy. The app loads quickly and the product search is accurate. I did face a minor issue with tracking my orders, but customer support responded promptly and resolved it. I love the user-friendly interface and the detailed product descriptions."
  },
  {
    id: 3,
    name: "Michael Smith",
    img: People_3,
    rating: 3,
    comment: "TechItEasy is a decent e-commerce platform. I like the design and product range, but sometimes the website is a bit slow during peak hours. The checkout process is smooth, but I hope they add more promotional offers and loyalty rewards for frequent shoppers."
  },
  {
    id: 4,
    name: "David Wilson",
    img: People_4,
    rating: 5,
    comment: "Absolutely love TechItEasy! The interface is clean and intuitive, making it easy to find what I need. I ordered electronics and received them faster than expected. Customer service is excellent and very responsive. This app makes online shopping truly convenient and enjoyable."
  },
  {
    id: 5,
    name: "Priya Sharma",
    img: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    comment: "TechItEasy offers a great shopping experience. The variety of products is impressive, and the images and descriptions are accurate. Occasionally, the website lags on mobile devices, but otherwise it’s smooth. I appreciate the secure payment system and fast delivery."
  }
];

const videoOverlayInfo = [
  { id: 1, description: "Latest games are here. Buy and play Games ", icon: Game_Controller_Icon, alt:"Game" },
  { id: 2, description: "Explore the latest gadgets", icon: Gadget_Icon, alt:"Gadget" },
  { id: 3, description: "Read books to sharpen your mind", icon: Book_Icon, alt:"Book" },
  { id: 4, description: "Experience music like never before", icon: Music_Note_Icon, alt:"Music_note" },
  
];

export { reviews, linearSlide, webPageReviews, videoOverlayInfo }