import {IoLogoInstagram, IoLogoYoutube, IoLogoPinterest, IoLogoDribbble}
 from "react-icons/io5";


function SideBar() {
    return (
        <div>
            <div className=" w-[90px] border-r-[1px] h-screen flex items-center justify-around flex-col fixed">
                <h2 className="tracking-wide -rotate-90 ">HOMEPAGE</h2>
                <div className="flex flex-col mb-10 gap-7 text-[20px]">
                    <IoLogoInstagram className="transition-all ease-in-out cursor-pointer hover:scale-110" />
                    <IoLogoYoutube  className="transition-all ease-in-out cursor-pointer hover:scale-110" />
                    <IoLogoPinterest  className="transition-all ease-in-out cursor-pointer hover:scale-110"/>
                    <IoLogoDribbble className="transition-all ease-in-out cursor-pointer hover:scale-110"/>
                </div>
            </div>
        </div>
    );
}

export default SideBar