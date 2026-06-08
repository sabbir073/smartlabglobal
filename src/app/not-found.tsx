// pages/404.tsx
import ButtonComponent from "@/components/common/button";
import ImageComponent from "@/components/common/image";
import SadFaceEmoji from "@/assets/images/sad_face_emoji.png";
import Subscribe from "@/components/common/subscribe/Subscribe";

export default function NotFound() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="max-w-[570px] w-[90%] mx-auto">
        <div className="max-w-[326px] mx-auto">
          <p className="text-[24px] sm:text-[32px] font-extrabold text-[#414042] dark:text-[#ffffffb6] text-right font-poppins mr-10 sm:mr-0">
            Oops!
          </p>
          <div className="flex items-center justify-center -mt-[40px] px-4 md:px-4">
            <span className="text-[100px] sm:text-[150px] font-bold text-[#414042] dark:text-[#ffffffb6] font-poppins">
              4
            </span>
            <span>
              <ImageComponent
                src={SadFaceEmoji}
                className="max-w-[100px] max-h-[101px] sm:max-w-[144px] sm:max-h-[145px]"
                alt="emoji"
              />
            </span>
            <span className="text-[100px] sm:text-[150px] font-bold text-[#414042] dark:text-[#ffffffb6] font-poppins inline-block rotate-[-8deg] relative top-[15px]">
              4
            </span>
          </div>
        </div>
        <div className="items-center justify-center text-center">
          <p className="mt-2 text-[18px] sm:text-[24px] text-[#414042] dark:text-[#ffffffb6] font-semibold font-poppins">
            Sorry for inconvenience, we will be back soon!
          </p>
          <p className="mt-4 text-[14px] sm:text-[14px] text-[#282828] dark:text-[#ffffffb6] font-normal font-poppins">
            Please submit your email, we will notify you
          </p>
          <Subscribe />
        </div>
      </div>
    </section>
  );
}
