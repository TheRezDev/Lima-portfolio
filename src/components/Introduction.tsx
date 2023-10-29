
function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className="h-[120px] border-r-[1px] mt-[-20px"></div>
      <div className="w-[5px] h-[5px] bg-green-600 rounded-full"></div>
      <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest '>Hello My Name Is</h2>
      <h2 className="text-[70px] font-bold text-black tracking-widest mt-5">
        Shima <br></br>Yousefi
      </h2>
      <img className='object-covered w-[200px] h-[200px] bg-gray-200 p-1 rounded-full mt-7' 
      src="/public/profile-1.png" />
    </div>
  );
}

export default Introduction

