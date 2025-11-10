import ConnectLady from '../assets/Images/Connect_lady.svg'
import circleArrow from '../assets/Images/Circlearrow.svg'
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/LogoTriotree.svg";
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import FacebookIcon from '../assets/Images/Fb.svg';
import twittericon from '../assets/Images/twitterX.svg';
import LinkedinIcon from '../assets/Images/linkedin.svg'
export default function Footer() {


    return (
        <footer>
            <div className="py-12 mx-20 flex gap-4">
                <div className="w-3/5">
                    <div><h2 className="text-3xl 2xl:text-4xl text-[#1FA33E] font-bold mb-6">Let's Connect!</h2></div>
                    <div className="text-3xl 2xl:text-4xl font-bold mb-4">Our experts help you achieve your dream</div>
                    <div className="text-lg 2xl:text-xl font-medium mb-4">An expert support makes it possible!</div>
                    <div className="w-full h-87 2xl:h-100"><img className='h-full object-cover w-full' src={ConnectLady} alt={ConnectLady} /></div>
                </div>
                <div className="w-3/5 flex">
                    <div className='Arrow_Left'></div>
                    <div className='bg-[#EFF3CD] w-full h-full'>
                        <div className="flex justify-center items-center p-8">
                            <form action="/index" method="post" className="flex flex-col w-full gap-4 2xl:text-xl">
                                <input type="text" placeholder="Full Name" className="bg-white border border-gray-200 px-3 py-2 text-sm 2xl:text-base outline-none focus:border-[#1FA33E]" />
                                <input type="tel" placeholder="Contact No." className="bg-white border border-gray-200 px-3 py-2 text-sm 2xl:text-base outline-none focus:border-[#1FA33E]" />
                                <input type="email" placeholder="Email ID" className="bg-white border border-gray-200 px-3 py-2 text-sm 2xl:text-base outline-none focus:border-[#1FA33E]" />
                                <textarea placeholder="Address" className="bg-white border border-gray-200 overflow-auto h-64 2xl:h-75 px-3 py-2 2xl:text-base text-sm outline-none resize-none focus:border-[#1FA33E]" rows="3"></textarea>
                                <button type="submit" className="bg-[#1FA33E] text-white font-semibold uppercase py-2 hover:bg-green-700 transition-all duration-200">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='bg-[#D6F8DE] w-1/2 pl-20 py-12 pr-10'>
                    <div><h2 className="text-3xl font-bold mb-6">Ready to start?</h2></div>
                    <div className="text-lg font-medium mb-4">Get in-context advice from our experts about your most pressing issues or areas of interest</div>
                    <div className='flex gap-2.5'>
                        <div className='text-[#12852D] text-lg font-semibold'>Contact us Now</div>
                        <div><img src={circleArrow} alt={circleArrow} /></div>
                    </div>
                </div>
                <div className='bg-[#E7FFED] w-1/2 py-12 pl-10 pr-20'>
                    <div><h2 className="text-3xl font-bold mb-6">Looking for a Job?</h2></div>
                    <div className="text-lg font-medium mb-4">We know what it takes to get the job you deserve. join the most successful and innovative research company.</div>
                    <div className='flex gap-2.5'>
                        <div className='text-[#12852D] text-lg font-semibold'>See Open Position</div>
                        <div><img src={circleArrow} alt={circleArrow} /></div>
                    </div></div>
            </div>
            <div className='flex py-12 mx-20'>
                <div className="grid grid-cols-4 gap-8">
                    <div className="pr-6">
                        <img src={logo} alt="Triotree Logo" className="w-28 mb-3" />
                        <p className="text-sm 2xl:text-base leading-normal text-justify py-1">
                            <strong>TrioTree Technologies</strong> is one of the leading
                            providers of healthcare solutions in India, UK and the Middle-East.
                            TrioTree Technologies was founded by a group of doctors and
                            engineers with decades of experience in the healthcare domain.
                        </p>
                    </div>
                    <div>
                        <div className="text-[#1FA33E] font-semibold mb-6">More Links</div>
                        <ul className="list-disc list-inside text-sm 2xl:text-base space-y-5">
                            <li>About us</li>
                            <li>Services</li>
                            <li>Why Choose Us</li>
                            <li>Management Team</li>
                            <li>Bespoke Development Services</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-[#1FA33E] font-semibold mb-6">More Links</div>
                        <ul className="list-disc list-inside text-sm 2xl:text-base space-y-5">
                            <li>Integration Services</li>
                            <li>Implementation Services</li>
                            <li>Blogs</li>
                            <li>Gallery</li>
                            <li>Clients</li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-[#1FA33E] font-semibold mb-6">Contact Us</div>
                        <ul className="space-y-9 text-sm 2xl:text-base">
                            <li className="flex items-center gap-2">
                                <PhoneIcon className="w-4 h-4 text-[#BFD015]" />
                                +91-120-4165164
                            </li>
                            <li className="flex items-center gap-2">
                                <EnvelopeIcon className="w-4 h-4 text-[#BFD015]" />
                                info@triotree.com
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPinIcon className="w-4 h-4 text-[#BFD015]" />
                                <span>
                                    H 50, 1st & 2nd Floor, Sector 63
                                    <br />
                                    Noida-201301, UP, India
                                </span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 mt-3">
                            <div className='rounded-full bg-[#FAFFCC] p-2'><img src={FacebookIcon} alt={FacebookIcon} className="w-4 h-4 text-[#BFD015] cursor-pointer" /></div>
                            <div className='rounded-full bg-[#FAFFCC] p-2'><img src={twittericon} alt={twittericon} className="w-4 h-4 text-[#BFD015] cursor-pointer" /></div>
                            <div className='rounded-full bg-[#FAFFCC] p-2'> <img src={LinkedinIcon} alt={LinkedinIcon} className="w-4 h-4 text-[#BFD015] cursor-pointer" /></div>
                            <button className="border border-[#BFD015] text-[#1FA33E] text-xs 2xl:text-sm px-2 py-0.5 rounded hover:bg-[#1FA33E] hover:text-white transition">
                                Brochure Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-3 px-20 bg-[#D8E6DB] text-sm 2xl:text-base items-center gap-2 flex flex-wrap justify-between'>
                <p className="text-center flex">
                    © 2014 - 2025 <strong className='px-2'>Triotree Technologies Pvt. Ltd.</strong><span className='px-2 border-r'>All Rights Reserved</span>
                    <span className='px-2 '>Triotree Technologies Rated{" "}</span>
                    <span className="text-[#1FA33E] font-semibold pr-2">4.4/5</span> based on 197 reviews
                </p>
                <Link
                    to="/privacy-policy"
                    className="text-blue-600 hover:underline font-medium whitespace-nowrap flex"
                >
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}