import CashOnDel from '../assets/icons/cash-on-delivery.png';
import CashOnDel2 from '../assets/icons/cash-on-delivery-1.png';
import CustomerSupport from '../assets/icons/customer-support.png';
import DeliveryTruck from '../assets/icons/delivery-truck.png';
import Heart from '../assets/icons/heart.png';
import Heart_Fill from '../assets/icons/heart-fill.png'
import Rupee from '../assets/icons/rupee.png';
import Rupee1 from '../assets/icons/rupee-1.png';
import Rupee2 from  '../assets/icons/rupee-2.png';
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

import ShowRoom_Day from '../assets/img/showroom-day.webp';
import ShowRoom_Night from '../assets/img/showroom-night.webp';
import Contact_Img from '../assets/contact_img.webp'

export const IconImg = {CashOnDel, CashOnDel2, CustomerSupport, DeliveryTruck, Heart, Heart_Fill, Rupee, Rupee1, Rupee2, Rupee3, Sync, Transfer, Cart, Close, Gears, LogIn, LogOut, Menu, SearchImg, UserImg}

export const Img = {ShowRoom_Day, ShowRoom_Night, Contact_Img}

const linearSlide = [
  {id: 1, name: "Easy Returns Policy", icon: ""},
  {id: 2, name: "Premium Quality Products", icon:''},
  {id: 3, name: "Expert Guidance", icon: ''},
  {id: 4, name: "Fast Reliable Shipping", icon: ''},
  {id: 5, name: "Secure Payment Options", icon: ''},
  {id: 6, name: "24/7 Customer Support", icon: ''},
  {id: 7, name: "10M + Delivered", icon: ''}
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

export {reviews, linearSlide }