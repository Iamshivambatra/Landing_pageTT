import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import photo1 from '../assets/Triotree_peopleimage/Peopleeight.svg';
import photo2 from '../assets/Triotree_peopleimage/Peoplesix.svg';
import photo3 from '../assets/Triotree_peopleimage/Peopleseven.svg';
import photo4 from '../assets/Triotree_peopleimage/Peoplefive.svg';
import photo5 from '../assets/Triotree_peopleimage/Peoplethree.svg';
import photo6 from '../assets/Triotree_peopleimage/Peopletwo.svg';
import photo7 from '../assets/Triotree_peopleimage/Peoplefour.svg';
import photo8 from '../assets/Triotree_peopleimage/Peopleone.svg';

export default function Gallery() {
    const firstRow = [photo1, photo2, photo3, photo4];
    const secondRow = [photo5, photo6, photo7, photo8];

    // hide license warning in console
    if (typeof window !== "undefined") {
        const origWarn = console.warn;
        console.warn = (...args) => {
            if (!args[0]?.includes("license key")) origWarn(...args);
        };
    }

    return (
        <div className="bg-[#BFD01533] p-2.5 flex flex-col gap-2 overflow-hidden">
            <LightGallery
                speed={500}
                licenseKey=""
                plugins={[lgZoom, lgThumbnail]}
                selector="a"
            >
                <div className="marquee_scroll mb-2.5">
                    <ul className="marquee__content_scroll">
                        {firstRow.map((img, index) => (
                            <li
                                key={`r1-${index}`}
                                className={`overflow-hidden block ${index % 2 === 0 ? 'w-[23%]' : 'w-[27%]'}`}
                            >
                                <a href={img}>
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        className="h-52 w-full object-cover transform transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* {duplicate ul} */}
                    <ul aria-hidden="true" className="marquee__content_scroll">
                        {firstRow.map((img, index) => (
                            <li
                                key={`r1dup-${index}`}
                                className={`overflow-hidden block ${index % 2 === 0 ? 'w-[23%]' : 'w-[27%]'}`}
                            >
                                <a href={img}>
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        className="h-52 w-full object-cover transform transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="marquee_scroll reverse">
                    <ul className="marquee__content_scroll">
                        {secondRow.map((img, index) => (
                            <li
                                key={`r2-${index}`}
                                className={`overflow-hidden block ${index === 1 ? 'w-[27%]' : index % 2 === 0 ? 'w-[31%]' : 'w-[15%]'}`}
                            >
                                <a href={img}>
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        className="h-52 w-full object-cover transform transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* {duplicate ul} */}
                    <ul aria-hidden="true" className="marquee__content_scroll">
                        {secondRow.map((img, index) => (
                            <li
                                key={`r2dup-${index}`}
                                className={`overflow-hidden block ${index === 1 ? 'w-[27%]' : index % 2 === 0 ? 'w-[31%]' : 'w-[15%]'}`}
                            >
                                <a href={img}>
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        className="h-52 w-full object-cover transform transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </LightGallery>
        </div>
    );
}
