import React from "react";
import { Carousel } from "@material-tailwind/react";
import desktopImg from "../assets/Images/desktopImg.svg";

export default function CarouselWithContent() {
    const slides = [
        {
            title: "HISTree",
            subtitle: "Developed for Clinicians by Clinicians",
            description:
                "Transforming Healthcare Workflow through Effortless, Efficient & Quality Driven Product Innovation.",
            highlight: "Check out our range of Clinical Management Systems…",
            image: desktopImg,
        },
        {
            title: "OPDTree",
            subtitle: "Simplifying Outpatient Management",
            description:
                "Designed to streamline patient visits, billing, and treatment records efficiently.",
            highlight: "Experience seamless patient flow from registration to discharge.",
            image: desktopImg,
        },
        {
            title: "PHARMAPro",
            subtitle: "Next-Gen Pharmacy Management",
            description:
                "Ensure accuracy in dispensing and inventory with smart automation tools.",
            highlight: "Empowering pharmacists with insights and real-time tracking.",
            image: desktopImg,
        },
        {
            title: "BILLTree",
            subtitle: "Financial Clarity for Healthcare",
            description:
                "Smart billing, transparent reports, and powerful analytics in one dashboard.",
            highlight: "Simplify financial operations with ease and accuracy.",
            image: desktopImg,
        },
        {
            title: "LABConnect",
            subtitle: "Redefining Lab Management",
            description:
                "Accelerate diagnostics and improve communication between clinicians and labs.",
            highlight: "Integrate, analyze, and deliver reports faster than ever.",
            image: desktopImg,
        },
    ];

    return (
        <div className="w-full h-[450px] overflow-hidden">
            <Carousel
                autoplay={true}
                loop={true}
                transition={{ duration: 0.8 }}
                prevArrow={() => null}
                nextArrow={() => null}
                className="rounded-xl w-full h-full Carousel_body"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute left-1/2 flex -translate-x-1/2 gap-2 pl-[83px] bottom-[60px]">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`cursor-pointer block h-2 w-2 rounded-full transition-all ${activeIndex === i ? "bg-[#BFD015]" : "bg-gray-400"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center justify-between h-full w-full bg-triotree p-10 md:px-20"
                    >
                        {/* Left Section */}
                        <div className="w-full md:w-1/2 space-y-5 text-left">
                            <div className="border-l-4 border-green-500 pl-3">
                                <h1 className="font-semibold text-gray-900 text-5xl md:text-6xl">
                                    {item.title}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                    {item.subtitle}
                                </h2>
                            </div>
                            <div className="text-gray-600 leading-relaxed">
                                <p>{item.description}</p>
                                <p className="text-[#3E3E3E] font-semibold mt-2">
                                    {item.highlight}
                                </p>
                            </div>
                            <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition">
                                Products →
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="md:w-[600px] w-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
