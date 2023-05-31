import { useEffect, useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export function DiscoverySlideBar() {

    const discoveryRef = useRef()
    const [prevEl, setPrevEl] = useState(null)
    const [nextEl, setNextEl] = useState(null)

    const [slidesPerView, setSlidesPerView] = useState(2)
    const [pagination, setPagination] = useState(false)

    useEffect(() => {
        resizeObserver.observe(discoveryRef.current)

        return (() => {
            if (discoveryRef.current)
                resizeObserver.unobserve(discoveryRef.current)
        })
    }, [])

    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            console.log(entry.target)
            if (entry.target.clientWidth > 700) {
                setSlidesPerView(2)
                setPagination(false)
            } else {
                setSlidesPerView(1)
                setPagination(true)
            }
        }
    })

    return (
        <div ref={discoveryRef} className="discovery-slide-bar">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={16}
                loop={true}
                pagination={pagination}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={{ prevEl, nextEl }}
                speed={2500}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper discovery-slides-container"
            >
                <div className="btn-container prev-container">
                    <button ref={(node) => setPrevEl(node)} className="discovery-slide-bar-btn prev-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.533 10.526H5.422a.251.251 0 01-.165-.438l4.637-3.6a1.44 1.44 0 00-1.9-2.162L.813 10.165a2.4 2.4 0 000 3.6l7.179 5.837a1.44 1.44 0 001.9-2.161l-4.637-3.6a.251.251 0 01.165-.438h17.113a1.44 1.44 0 000-2.88v.003z"></path>
                        </svg>
                    </button>
                </div>
                <div className="btn-container next-container">
                    <button ref={(node) => setNextEl(node)} className="discovery-slide-bar-btn next-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.40206 10.5258H18.5131C18.6167 10.5248 18.709 10.4602 18.7455 10.3633C18.7821 10.2663 18.7553 10.1569 18.6781 10.0878L14.0411 6.48776C13.4767 5.95564 13.4352 5.0721 13.9472 4.48944C14.4593 3.90679 15.3408 3.83442 15.9411 4.32576L23.1221 10.1648C23.6387 10.6204 23.9346 11.276 23.9346 11.9648C23.9346 12.6536 23.6387 13.3092 23.1221 13.7648L15.9431 19.6018C15.3426 20.0868 14.4665 20.0121 13.9568 19.4324C13.4471 18.8527 13.4852 17.9742 14.0431 17.4408L18.6801 13.8408C18.7572 13.7717 18.7841 13.6622 18.7475 13.5653C18.711 13.4683 18.6187 13.4038 18.5151 13.4028H1.40206C0.621817 13.3822 0 12.7438 0 11.9633C0 11.1828 0.621817 10.5443 1.40206 10.5238V10.5258Z"></path>
                        </svg>
                    </button>
                </div>

                <SwiperSlide className="discovery-slide-card">
                    <img src="https://res.cloudinary.com/dxajfza46/image/upload/v1685305494/molts/disovery.slide.bar/newest.restaurants_xrioyt.avif" alt="" />
                    <div className="discovery-slide-bar-card-info">
                        <span className="discovery-slide-card-title">
                            Nice to eat 😉
                        </span>
                        <span className="discovery-slide-card-subTitle">
                            All the latest restaurants that joined us
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="discovery-slide-card">
                    <img src="https://res.cloudinary.com/dxajfza46/image/upload/v1685432393/molts/disovery.slide.bar/hot.right.now_q4ohyr.png" alt="" />
                    <div className="discovery-slide-bar-card-info">
                        <span className="discovery-slide-card-title">
                            Hot right now 🔥
                        </span>
                        <span className="discovery-slide-card-subTitle">
                            This week hottest restaurants
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="discovery-slide-card">
                    <img src="https://res.cloudinary.com/dxajfza46/image/upload/v1685305493/molts/disovery.slide.bar/opening.hours_pkxiyu.avif" alt="" />
                    <div className="discovery-slide-bar-card-info">
                        <span className="discovery-slide-card-title">
                            Our delivery hours
                        </span>
                        <span className="discovery-slide-card-subTitle">
                            Sun-Fri: 08:00-01:00, Sat: 10:00-01:00
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="discovery-slide-card">
                    <img src="https://res.cloudinary.com/dxajfza46/image/upload/v1685305493/molts/disovery.slide.bar/credit_pniimm.avif" alt="" />
                    <div className="discovery-slide-bar-card-info">
                        <span className="discovery-slide-card-title">
                            Get ₪50 credits 💰
                        </span>
                        <span className="discovery-slide-card-subTitle">
                            Share your code here
                        </span>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="discovery-slide-card">
                    <img src="https://res.cloudinary.com/dxajfza46/image/upload/v1685385050/molts/disovery.slide.bar/gift.card_r50tso.png" alt="" />
                    <div className="discovery-slide-bar-card-info">
                        <span className="discovery-slide-card-title">
                            Gift card
                        </span>
                        <span className="discovery-slide-card-subTitle">
                            A present you MUST love
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}