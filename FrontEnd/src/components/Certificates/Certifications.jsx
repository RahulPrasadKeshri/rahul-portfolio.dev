import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { certifications } from "../../constants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-[#0a0a1a] text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-purple-400">
        Certifications
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          className="rounded-2xl shadow-lg"
        >
          {certifications.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="flex flex-col items-center">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full md:w-[600px] rounded-xl border-2 border-purple-500 shadow-md"
                />
                <p className="mt-4 text-lg font-semibold text-purple-300 text-center">
                  {cert.title}
                </p>
                <p className="text-sm text-gray-400 text-center">
                  {cert.org} • {cert.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
