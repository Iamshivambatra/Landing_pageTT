import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery from '../Components/Gallery';
import Bg_his from "../assets/Images/Bg_his.svg";
import hospitaLimg from "../assets/Images/hr.svg";
import Lis_logo from "../assets/Images/LISTree_logo.svg";
import Dashboard_logo from "../assets/Images/Dashboard_logo.svg";
import mobileapp_logo from "../assets/Images/Mobileapp_logo.svg";
import ambula_logo from "../assets/Images/AmbulaTree_logo.svg";
import stat_hospitallogo from '../assets/Images/cil_hospital.svg';
import smily from '../assets/Images/Smily.svg';
import stethoscope from '../assets/Images/stethoscope.svg';
import Idea_logo from '../assets/Images/expidea.svg';
import Blocks from '../assets/Images/Blocks.svg';
import Services_area from '../assets/Images/OurServices_page.svg';
import DevIcon from '../assets/Images/Codingimg.svg';
import IntegrationIcon from '../assets/Images/Bulb.svg';
import ImplementationIcon from '../assets/Images/Implementimg.svg';
import officeimg from '../assets/Images/Officeimg.svg';
import arrow from '../assets/Images/Arrow.svg';
import rajagiri from '../assets/Hospital_logos/rajagiri.svg';
import ayushman from '../assets/Hospital_logos/ayushman.svg';
import blogpost1 from '../assets/Images/BlogPost1.svg'
import heart from '../assets/Images/Heart.svg'
import awards from '../assets/Images/Awards.svg'
import partner1 from '../assets/marquee_imgs/DUBAI.svg'
import partner2 from '../assets/marquee_imgs/FOUR_courners.svg'
import partner3 from '../assets/marquee_imgs/MALAYSIA.svg'
import partner4 from '../assets/marquee_imgs/SYSCRAFT_KENYA.svg'

export default function MainBody() {

  const stats = [
    { icon: stat_hospitallogo, value: "150+", label: "Clients" },
    { icon: smily, value: "10M+", label: "Patients" },
    { icon: stethoscope, value: "7000+", label: "Doctors" },
    { icon: Idea_logo, value: "300+", variable: "Years", label: "Cumulative Experience" },
    { icon: Blocks, value: "50+", label: "Modules" },
  ];
  const Products = [
    { icon: hospitaLimg, title: "HISTree", label: "Hospital Information System" },
    { icon: Lis_logo, title: "LISTree", label: "Lab Information System" },
    { icon: ambula_logo, title: "Ambula Tree", label: "Clinic Management System" },
    { icon: mobileapp_logo, title: "Mobile Apps", label: "For Hospital Users & Patients" },
    { icon: Dashboard_logo, title: "Dashboard", label: "BI & Analytics for Hospital Management" }
  ];
  const Services = [
    { icon: DevIcon, title: "Bespoke Development Services", description: "Lorem Ipsum is simply dummy text of the printing", },
    { icon: IntegrationIcon, title: "Integration Services", description: "Lorem Ipsum is simply dummy text of the printing", },
    { icon: ImplementationIcon, title: "Implementation Services", description: "Lorem Ipsum is simply dummy text of the printing", },
  ];
  const awardsList = [
    "Indian Express Healthcare IT Award 2016 (EMR Adoption)",
    "IMC Award (2017) – Patient porta",
    "JCI & NABH Accredited Clientele",
    "Top 100 Healthcare Leaders Award – IFAH 2019",
    "An ISO 9001:2015 and ISO 27001:2013 Certified Company",
  ];
  const logos = [
    partner1, partner2, partner3, partner4
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));

 useEffect(() => {
  const start = performance.now();
  const duration = 1200;
  const targets = stats.map(s => parseInt(s.value.replace(/\D/g, ""), 10));

  const animate = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    setCounts(targets.map(t => Math.floor(t * eased)));

    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}, []);
// https://triotreelandingpage.vercel.app/
// http://localhost:3000
// serve -s dist

  return (
    <section>
      <div class="bg-[#1FA33E] text-white flex justify-between items-center py-4 px-20 rounded-r-full mr-30">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-[#12852D] p-2">
              <img src={item.icon} alt={item.label} className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xl">
                <span className="font-bold mr-1">
                  {counts[index]}
                  {item.value.replace(/[0-9]/g, "") /* adds +, M, etc */}
                </span>
                {item.variable}
              </p>
              <p className="text-sm 2xl:text-lg">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="py-12 bg-white">
        <div class="max-w-5xl mx-20">
          <p class="text-blue-600 text-sm 2xl:text-lg font-medium mb-2">Our Products</p>
          <h2 class="text-3xl md:text-3xl 2xl:text-4xl font-bold leading-snug max-w-[84%] 2xl:max-w-full">
            <div>
            <div>HISTree – Transforming Healthcare Workflow</div>
            <div class=""> through &nbsp; Effortless, Efficient &amp; Quality Driven Product Innovation</div>
            </div>
            </h2>
            
          <p class="text-[#222222] mt-3 text-base md:text-lg">TrioTree has a suite-of-the-art products and digital systems that change the way care is delivered.</p></div>
        <div className="flex mx-15 pt-7 mb-6 gap-2.5">
          {Products.map((item, index) => (
            <div key={index} className={`border-r border-r-[#BFD015] bg-cover py-6 px-4 2xl:px-10 Prd Prd${index}`}>
              <div className="mb-2.5">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="h-14 w-13 2xl:h-22 2xl:w-20"
                ></img>
              </div>
              <div>
                <label className="font-bold 2xl:text-lg">{item.title}</label>
              </div>
              <div className="text-xs 2xl:text-base">
                <label >{item.label}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-size-[100%] py-10 bg-no-repeat" style={{ backgroundImage: `url(${Services_area})` }}>
        <div class="py-12 w-1/2">
          <div class="max-w-5xl mx-20">
            <p class="text-blue-600 text-sm 2xl:text-lg font-medium mb-2">Our Services</p>
            <h2 class="text-3xl md:text-3xl 2xl:text-4xl font-bold leading-snug">
              <div>High Quality Services for You</div></h2>
            <p class="text-[#222222] mt-3 text-base md:text-lg 2xl:text-xl">TrioTree offers expert technical and project management consultants to hospitals and laboratories. With proven experience, we provide comprehensive strategy and implementation services for healthcare development.</p></div>
          <div className="max-w-md  2xl:max-w-lg mr-20 ml-17 my-10">
            {
              Services.map((item, index) => (
                <div key={index} className="feature-item flex justify-around my-8 content-center">
                  <div className="bg-[#1FA33E] h-14 w-14 2xl:h-20 2xl:w-20   content-center justify-items-center">
                    <img src={item.icon} alt={item.title} className="h-9 w-10 2xl:h-16  2xl:w-17" />
                  </div>
                  <div className="content-center">
                    <h6 className="font-semibold 2xl:text-lg">{item.title}</h6>
                    <h6 className="text-sm 2xl:text-base">{item.description}</h6>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div class="py-12">
        <div class="mx-20">
          <p class="text-blue-600 text-sm 2xl:text-lg font-medium mb-2">About Us</p>
          <h2 class="text-3xl md:text-3xl 2xl:text-4xl font-bold leading-snug"><div>Short Story About Triotree.</div></h2>
          <p class="text-[#222222] mt-3 text-base 2xl:text-lg">At TrioTree Technologies we combine technology, enterprise and innovation to bring you next generation Healthcare Solutions</p>
          <div className="flex items-center my-5">
            <div className="w-1/2">
              <h3 className="text-xl font-bold leading-snug">Our Story</h3>
              <p class="text-[#222222] mt-3 text-sm 2xl:text-lg">TrioTree Technologies is one of the leading providers of healthcare solutions in India,UK and the Middle-East. TrioTree Technologies was founded by a group of doctors and engineers with decades of experience in the healthcare domain. The founders have conceptualised, designed and deployed a variety of large scale systems for the healthcare industry to streamline business operations and to create a framework for clinical and strategic decision making.</p>
            </div>
            <div className="w-1/2">
              <img src={officeimg} alt="Triotree Office" className="h-70 2xl:h-90 object-cover w-full" /></div>
          </div>
        </div>
      </div>
      <Gallery />
      <div class="py-12 mx-20 flex justify-between">
        <div className="w-2/5 flex flex-col py-10 gap-5">
          <div className="text-3xl md:text-3xl 2xl:text-4xl  font-bold leading-snug "><h2>What our clients are saying</h2></div>
          <div><label htmlFor="" className="text-[#12852D] pr-18 font-medium leading-snug text-3xl 2xl:text-4xl">Help us improve our
            productivity</label></div>
          <div className="text-sm 2xl:text-lg ">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="flex gap-10 py-2">
            <div className="flex items-center gap-3 bg-white">
              <div className="w-18 h-18 2xl:w-22 2xl:h-22 flex items-center justify-center rounded-full ">
                <img src={rajagiri} alt={rajagiri} className="w-full object-contain" />
              </div>
              <div>
                <div className="font-semibold text-sm 2xl:text-base">Rajagiri Hospital</div>
                <p className="text-xs 2xl:text-sm">Near GTN Junction, Munnar Rd, Chungamvely, Aluva, Kochi, Kerala 683112</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col py-10 gap-5">
          <div className="text-3xl md:text-3xl 2xl:text-4xl font-bold leading-snug flex justify-end"><div><Link to={URL}><img src={arrow} alt="Arrow" /></Link></div></div>
          <div><label htmlFor="" className="text-[#12852D] font-medium leading-snug text-3xl 2xl:text-4xl">Manage Project much easier
            with this tool</label></div>
          <div className="text-sm 2xl:text-lg">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="flex gap-10 py-2">
            <div className="flex items-center gap-3 bg-white">
              <div className="w-18 h-18 2xl:w-22 2xl:h-22 flex items-center justify-center rounded-full ">
                <img src={ayushman} alt={ayushman} className="w-full object-contain" />
              </div>
              <div>
                <div className="font-semibold text-sm 2xl:text-base">Ayushman Hospital</div>
                <p className="text-xs 2xl:text-sm">Near GTN Junction, Munnar Rd, Chungamvely, Aluva, Kochi, Kerala 683112</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-12 px-20 bg-[#EEF8F0] gap-2.5">
        <div className="text-3xl md:text-3xl 2xl:text-4xl mb-6 font-semibold leading-snug"><h2>Blogs articles</h2></div>
        <div className="flex justify-between gap-2.5">
          <div className="p-2.5 bg-white rounded-md w-3/5">
            <div className="w-full h-56 relative">
              <div className="absolute right-0 top-10 bg-[#BFD015] rounded-bl-full rounded-tl-full p-2 2xl:text-lg font-semibold"><label htmlFor="Date">01, Jan 2024</label></div>
              <img className="w-full h-full object-cover rounded-md" src={blogpost1} alt={blogpost1} />
            </div>
            <div className="p-2.5">
              <div className="flex justify-between">
                <div className="font-bold 2xl:text-lg">Impact of Winter on Our Health</div>
                <span className="flex gap-1.5 items-center">
                  <label htmlFor="LikeCount" className="text-[#8A8A8A] font-bold">100</label>
                  <img className="" alt={heart} src={heart}></img>
                </span>
              </div>
              <div className="text-xs 2xl:text-sm"><span className="border-r">Posted in Healthcare, Healthcare Technology </span><span className="px-1">No comments</span></div>
              <hr className="text-[#BCBCBC] border-[#BCBCBC] my-2" />
              <div className="text-sm  2xl:text-base leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 flex-col w-2/5">
            <div className="flex p-2.5 bg-white rounded-md">
              <div className="w-1/4 h-28 relative">
                <div className="absolute left-0 top-5 bg-[#BFD015] rounded-br-full rounded-tr-full p-1 text-xs 2xl:text-sm font-semibold">
                  <label htmlFor="Date">01, Jan 2024</label>
                </div>
                <img className="w-full h-full object-cover rounded-md" src={blogpost1} alt={blogpost1} />
              </div>
              <div className="p-2.5 w-3/4">
                <div className="flex justify-between">
                  <div className="text-sm 2xl:text-base font-bold">Impact of Winter on Our Health</div>
                  <span className="flex gap-1.5 items-center">
                    <label htmlFor="LikeCount" className="text-[#8A8A8A] text-sm font-bold"></label>
                    <img className="h-5 w-5" alt={heart} src={heart}></img>
                  </span>
                </div>
                <div className="text-xs 2xl:text-sm"><span className="border-r">Posted in Healthcare, Healthcare Technology </span><span className="px-1">No comments</span></div>
                <hr className="text-[#BCBCBC] border-[#BCBCBC] my-2" />
                <div className="text-sm leading-relaxed">
                  <p className="w-full overflow-hidden 2xl:text-lg text-ellipsis whitespace-nowrap">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
             <div className="flex p-2.5 bg-white rounded-md">
              <div className="w-1/4 h-28 relative">
                <div className="absolute left-0 top-5 bg-[#BFD015] rounded-br-full rounded-tr-full p-1 text-xs 2xl:text-sm font-semibold">
                  <label htmlFor="Date">01, Jan 2024</label>
                </div>
                <img className="w-full h-full object-cover rounded-md" src={blogpost1} alt={blogpost1} />
              </div>
              <div className="p-2.5 w-3/4">
                <div className="flex justify-between">
                  <div className="text-sm 2xl:text-base font-bold">Impact of Winter on Our Health</div>
                  <span className="flex gap-1.5 items-center">
                    <label htmlFor="LikeCount" className="text-[#8A8A8A] text-sm font-bold"></label>
                    <img className="h-5 w-5" alt={heart} src={heart}></img>
                  </span>
                </div>
                <div className="text-xs 2xl:text-sm"><span className="border-r">Posted in Healthcare, Healthcare Technology </span><span className="px-1">No comments</span></div>
                <hr className="text-[#BCBCBC] border-[#BCBCBC] my-2" />
                <div className="text-sm leading-relaxed">
                  <p className="w-full overflow-hidden 2xl:text-lg text-ellipsis whitespace-nowrap">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
             <div className="flex p-2.5 bg-white rounded-md">
              <div className="w-1/4 h-28 relative">
                <div className="absolute left-0 top-5 bg-[#BFD015] rounded-br-full rounded-tr-full p-1 text-xs 2xl:text-sm font-semibold">
                  <label htmlFor="Date">01, Jan 2024</label>
                </div>
                <img className="w-full h-full object-cover rounded-md" src={blogpost1} alt={blogpost1} />
              </div>
              <div className="p-2.5 w-3/4">
                <div className="flex justify-between">
                  <div className="text-sm 2xl:text-base font-bold">Impact of Winter on Our Health</div>
                  <span className="flex gap-1.5 items-center">
                    <label htmlFor="LikeCount" className="text-[#8A8A8A] text-sm font-bold"></label>
                    <img className="h-5 w-5" alt={heart} src={heart}></img>
                  </span>
                </div>
                <div className="text-xs 2xl:text-sm"><span className="border-r">Posted in Healthcare, Healthcare Technology </span><span className="px-1">No comments</span></div>
                <hr className="text-[#BCBCBC] border-[#BCBCBC] my-2" />
                <div className="text-sm leading-relaxed">
                  <p className="w-full overflow-hidden 2xl:text-lg text-ellipsis whitespace-nowrap">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mx-20 py-12 bg-white gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4">
            Awards & Accolades
          </h2>
          <p className="text-green-700 font-semibold mb-10 leading-snug 2xl:text-lg">
            Redefining quality improvement in healthcare organizations worldwide
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-3">
            {awardsList.map((award, index) => (
              <li className="2xl:text-lg" key={index}>{award}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="relative flex flex-wrap justify-center gap-3">
            <img src={awards} alt="Main Award" className="w-120 2xl:w-150 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="px-20 bg-[#12852D] flex gap-2.5">
        <div className="w-1/7 flex items-center pr-5 border-r border-[#ffffff] my-2.5">
          <div className="text-xl md:text-2xl 2xl:text-3xl text-white font-semibold leading-snug">
            Our Partners
          </div>
        </div>
        <div className="marquee w-6/7">
          <ul className="marquee__content">
            {logos.map((logo, index) => (
              <li key={index} className="marquee__item">
                <img src={logo} alt={`logo-${index}`} />
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="marquee__content">
            {logos.map((logo, index) => (
              <li key={index} className="marquee__item">
                <img src={logo} alt={`logo-duplicate-${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
