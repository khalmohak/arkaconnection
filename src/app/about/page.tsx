import React from "react";
import Navbar from "../appComponents/Navbar";
import Footer from "../appComponents/Footer";

function Page() {
  return (
    <>
      <div className=" mt-10">
        <Navbar />
      </div>

      <div
        className="
        min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-28
        md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-28
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-28
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-28
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-28
      "
      >
        <div
          className="
          mx-6 h-28 w-[95%] flex justify-center items-center text-center text-black rounded-full mt-20 text-lg font-bold
          sm:mx-8 sm:h-24 sm:w-[95%] sm:flex sm:justify-center sm:items-center sm:text-center sm:rounded-full sm:mt-20 sm:text-xl sm:font-bold
          md:mx-6 md:h-24 md:w-[95%] md:flex md:justify-center md:items-center md:text-center  md:mt-20 md:text-3xl md:font-bold
          lg:mx-6 lg:h-24 lg:w-[95%] lg:flex lg:justify-center lg:items-center lg:text-center
          lg:mt-20 lg:text-3xl lg:font-bold
          xl:mx-6 xl:h-20 xl:w-[95%] xl:flex xl:justify-center xl:items-center xl:text-center
          xl:mt-20 xl:text-4xl xl:font-bold
          2xl:mx-6 2xl:h-20 2xl:w-[95%] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center
          2xl:mt-20 2xl:text-5xl 2xl:font-bold"
        >
          Gurukul reaching to your doorstep Restoring Guru Shishya Parampara
        </div>

        <div
          className="
          flex flex-col justify-center items-center gap-y-10 gap-x-10
          sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-10 sm:gap-x-10
          md:flex md:flex-col md:justify-center md:items-center md:gap-y-10 md:gap-x-10
          lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-x-10
          xl:flex xl:justify-between xl:items-center xl:gap-x-10
          2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-x-10"
        >
          <div
            className="
          ml-0 h-1/3 w-72
          sm:ml-0 sm:h-1/3 sm:w-96
          md:ml-0 md:h-1/3 md:w-96
          lg:ml-16 lg:h-96 lg:w-1/3
          xl:ml-16 xl:h-96 xl:w-1/3
          2xl:ml-16 2xl:h-96 2xl:w-1/3 "
          >
            <img
              src="https://arkaconnection.in/wp-content/uploads/2023/11/maharishi.webp"
              alt=""
              className="
              rounded-lg h-full w-full
              sm:rounded-lg sm:h-full sm:w-full
              md:rounded-lg md:h-full md:w-full
              lg:rounded-lg lg:h-full lg:w-full
              xl:rounded-lg xl:h-full xl:w-full
              2xl:rounded-lg 2xl:h-full 2xl:w-full"
            />
          </div>

          <div
            className="
          mr-0 h-[28rem] w-[80%] flex flex-col px-10 gap-y-10 justify-center items-center
          sm:mr-0 sm:h-96 sm:w-[80%] sm:flex sm:flex-col sm:px-10 sm:gap-y-10 sm:justify-center sm:items-center
          md:mr-0 md:h-96 md:w-[80%] md:flex md:flex-col md:px-10 md:gap-y-10 md:justify-center md:items-center
          lg:mr-16 lg:h-96 lg:w-2/3 lg:flex lg:flex-col lg:px-10 lg:gap-y-10 lg:justify-center lg:items-center
          xl:mr-16 xl:h-96 xl:w-2/3 xl:flex xl:flex-col xl:px-10 xl:gap-y-10 xl:justify-center xl:items-center
          2xl:mr-16 2xl:h-96 2xl:w-2/3 2xl:flex 2xl:flex-col 2xl:px-10 2xl:gap-y-10 2xl:justify-center 2xl:items-center "
          >
            <div
              className="
            text-xl text-black font-bold
            sm:text-4xl  sm:font-bold
            md:text-4xl  md:font-bold
            lg:text-4xl  lg:font-bold
            xl:text-4xl  xl:font-bold
            2xl:text-5xl  2xl:font-bold"
            >
              Acharya Alok Awasthi
            </div>
            <div
              className="
            text-sm text-[#525e71] text-center font-semibold
            sm:text-xl sm:text-[#525e71] sm:text-center sm:font-semibold
            md:text-xl md:text-[#525e71] md:text-center md:font-semibold
            lg:text-xl lg:text-[#525e71] lg:text-center lg:font-semibold
            xl:text-xl xl:text-[#525e71] xl:text-center xl:font-semibold
            2xl:text-2xl 2xl:text-[#525e71] 2xl:text-center 2xl:font-semibold"
            >
              This is an Institution of higher learning in the field of
              Vedic-Studies and other Traditional Shastras. The words Astronomy
              and Astrology have distinct meanings in this modern world:
              Astronomy is the scientific study of the physical universe.
              Astrology is the practice of relating heavenly bodies with the
              lives and the events on earth. The split between Astronomy and
              Astrology is a feature of today’s lifestyle thought.
            </div>
          </div>
        </div>

        <div
          className="
          mx-10 text-base text-[#525e71] font-bold flex flex-col gap-y-4
          sm:mx-10 sm:text-lg  sm:font-bold sm:flex sm:flex-col sm:gap-y-4
          md:mx-10 md:text-lg md:font-bold md:flex md:flex-col md:gap-y-4
          lg:mx-10 lg:text-lg lg:font-bold lg:flex lg:flex-col lg:gap-y-4
          xl:mx-10 xl:text-lg xl:font-bold xl:flex xl:flex-col xl:gap-y-4
          2xl:mx-10 2xl:text-2xl 2xl:font-bold 2xl:flex 2xl:flex-col 2xl:gap-y-4
          
          
          "
        >
          <p>
            The concept of Astrology has emerged from the belief and the faith
            of people who remain orthodox to the traditional aspect of
            predictions. Today, the Astrology developed by Maharishi Kapi is
            considered as a science of stars, planets, and celestial bodies to
            extract information about people’s lives, human happenings, future,
            and other earthly topics.
          </p>

          <p>
            Here we have a specialization in this field of knowledge but, very
            few have that specialized in Maharishi Kapi expertise and are
            considered to be experts in it.
          </p>

          <p>
            Are you working in the Marketing department ? or are you with some
            operation teams where you have to lead or maybe follow teamwork to
            upgrade more ? Are you in the accounts departments ? or in the front
            office ?
          </p>

          <p>
            What are your goals and visions for your career ? If you do not have
            any clarity ? , or if you know what you want, but don’t know the
            path to reach there ?
          </p>

          <p>
            Defending the move Acharya Alok Awasthi (founder of Maharishi Kapi)
            said that astrology qualifies as a science, which he defined as “a
            subject that needs probing, investigation and research”.
          </p>

          <p>
            Acharya Alok Awasthi explored this field of Astrology and Astronomy
            with different perspective with the help of his by born expertise of
            Decoding mantras of Vedas and Upanishads and interpreted Astrology
            for corporate world.
          </p>

          <p>
            He started practicing Organization’s sections /departments and
            invented these courses for each designation so that they can work on
            their dominant Astronomy and perform successfully to achieve their
            goals step by step.
          </p>

          <p>
            This is a unique course that deals with the ways in which human
            beings attribute meaning to the planets, stars and sky, and
            construct cosmologies that provide the basis for culture and
            society.
          </p>

          <p>
            Here we are discussing about astrology and astronomy while exploring
            studies his relation with numbers manifested his thought about
            astronomy.
          </p>

          <p>
            Maharishi Kapi served us short path towards our goals to defined
            roles, he formatted the following courses to up-built our strength
            into implementations and he created a platform for us emerged this
            magical science into one format.
          </p>
        </div>

        {/* OUR MISSION */}
        <div
          className="
          w-full flex flex-col justify-center gap-y-5
          sm:w-full sm:flex sm:flex-col sm:justify-center sm:gap-y-5
          md:w-full md:flex md:flex-col md:justify-center md:gap-y-5
          lg:w-full lg:flex lg:flex-col lg:justify-center lg:gap-y-5
          xl:w-full xl:flex xl:flex-col xl:justify-center xl:gap-y-5
          2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-y-5"
        >
          <div
            className="
              ml-10 text-2xl  text-black  font-bold
              sm:ml-10 sm:text-4xl  sm:font-bold
              md:ml-10 md:text-4xl   md:font-bold
              lg:ml-10 lg:text-4xl  lg:font-bold
              xl:ml-10 xl:text-4xl  xl:font-bold
              2xl:ml-10 2xl:text-5xl 2xl:font-bold"
          >
            Our Mission
          </div>

          <div
            className="
              text-base ml-10 text-[#525e71] font-bold
              sm:text-xl sm:ml-10 sm:font-bold
              md:text-xl md:ml-10  md:font-bold
              lg:text-xl lg:ml-10 lg:font-bold
              xl:text-xl xl:ml-10  xl:font-bold
              2xl:text-2xl 2xl:ml-10 2xl:font-bold"
          >
            <p>To impart education in Vedic Science in the modern context.</p>
            <p>
              To provide higher lifestyle education in Veda, Upanishad,
              Astrology, Numerology, Vastu, Meditation, Ayurveda and other
              traditional subjects.
            </p>
            <p>
              To recognize the students with certification of scholar from
              Maharishi Kapi with respect to above mentioned subjects.
            </p>
            <p>
              To conduct courses, workshops, lectures & demonstrations in the
              Vedic and allied Tradition for the help of people across the
              world.
            </p>
          </div>
        </div>

        {/* OUR VISION */}
        <div
          className="
          mb-20 w-full flex flex-col justify-center gap-y-5
          sm:mb-20 sm:w-full sm:flex sm:flex-col sm:justify-center sm:gap-y-5
          md:mb-20 md:w-full md:flex md:flex-col md:justify-center md:gap-y-5
          lg:mb-20 lg:w-full lg:flex lg:flex-col lg:justify-center lg:gap-y-5
          xl:mb-20 xl:w-full xl:flex xl:flex-col xl:justify-center xl:gap-y-5
          2xl:mb-20 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-y-5"
        >
          <div
            className="
              ml-10 text-2xl text-black  font-bold
              sm:ml-10 sm:text-4xl  sm:font-bold
              md:ml-10 md:text-4xl  md:font-bold
              lg:ml-10 lg:text-4xl  lg:font-bold
              xl:ml-10 xl:text-4xl xl:font-bold
              2xl:ml-10 2xl:text-5xl 2xl:font-bold"
          >
            Our Vision
          </div>

          <div
            className="
              text-base mx-10 text-[#525e71] font-bold
              sm:text-xl sm:mx-10 sm:font-bold
              md:text-xl md:mx-10 md:font-bold
              lg:text-xl lg:mx-10 lg:font-bold
              xl:text-xl xl:mx-10  xl:font-bold
              2xl:text-2xl 2xl:mx-10  2xl:font-bold"
          >
            To establish Spiritual well-being through Vedic Knowledge, a high
            level of faith, like through Vedas Yoga etc., and to create
            commitment and behavior relating to ‘Vedic world view’ which
            provides a high sense of meaning and purpose to existence in
            general, and that offers an ethical path to personal fulfillment and
            self-realization.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
