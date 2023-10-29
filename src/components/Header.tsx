
function Header() {

    const menu = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "Skills",
        },
        {
            id: 3,
            name: "Gallery",
        },
        {
            id: 4,
            name: "Contact",
        },
    ];
    
    return (
        <div className="flex items-center justify-between w-screen border-b-[1px]">
            <div className="w-[90px] h-[90px]">
                <img className="" src="/logo.png" />
            </div>
            <div className="hidden md:flex gap-14">
                {
                    menu.map((item) => (
                        <h2>
                            <div className="font-medium cursor-pointer hover:underline"
                            >
                                {item.name}
                            </div>
                        </h2>
                    ))
                }
            </div>
            <div className="w-[90px] h-[90px] flex justify-center items-center">
                <svg className="w-10 h-10 text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
        </div>
    );
}

export default Header;
