import React from 'react'

const Price = () => {
  return (
    <div className='bg-[#151515] text-white py-24 px-4 w-full' id='price'>
      <div className='max-w-[800px] mx-auto'>
        <h1 className='text-transparent bg-clip-text py-1 px-3 font-bold bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-4xl'>Pricing</h1>
        
        <div classname='md:grid md:grid-cols-3 grid grid-rows-2 justify-center gap-5 mx-auto'>
          <div classname='md:w-[250px] w-full p-7 rounded-lg bg-[#121212]'>
            <h1 classname='text-2xl font-bold'>🍯 hivehub elite worker plan</h1>
            <p classname='text-[16px] font-semibold'>$19.99/month</p>
            <ul classname='flex-col flex pt-3'>
              <li>· 📚 access to bee-ginner courses and educational resources.</li>              
              <li>· 🐝 active participation in the hivehub community forums.</li>
              <li>· 📈 weekly buzz-worthy market updates and insights.</li>
              <li classname='items-center text-[14px] justify-center font-bold w-full mt-5 flex px-4 py-2 mr-6 rounded-full bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] '>
                <a href="https://discord.com/invite/catapbr2yd" >
                  join now
                </a>
              </li>
            </ul>
          </div>

          <div className='md:w-[250px] w-full p-7 rounded-lg bg-[#121212] flex flex-col'>
            <h1 className='text-2xl font-bold'>🐝 HiveHub Elite BuzzMaster Plan</h1>
            <p className='text-[16px] font-semibold'>$49.99/month</p>
            <ul className='flex-col flex pt-3'>
              <li>· 🍯 All Worker Plan features.</li>              
              <li>· 📊 In-depth bee-trading strategies and signals.</li>
              <li>· 🎓 Exclusive HiveHub webinars and live trading sessions.</li>
              <li>· 🍯 Sweet access to premium content and in-depth analysis.</li>
              <li className='text-[14px] justify-center flex items-end font-bold w-full mt-5 px-4 py-2 mr-6 rounded-full bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] '>
                <a href="https://discord.com/invite/cAtaPBr2YD" >
                  Join now
                </a>
              </li>
            </ul>
          </div>

           <div className='md:w-[250px] w-full p-7 rounded-lg bg-[#121212]'>
            <h1 className='text-2xl font-bold'>🌟 HiveHub Elite NectarNoble Plan</h1>
            <p className='text-[16px] font-semibold'>$99.99/month</p>
            <ul className='flex-col flex pt-3'>
              <li>· 🏆 All BuzzMaster Plan features.</li>              
              <li>· 📚 Personalized portfolio assessment and recommendations from our bee-experts.</li>
              <li>· 🪙 One-on-one consultations for your unique financial goals.</li>
              <li>· 🚀 Early access to the freshest courses and content.</li>
              <li className='items-center text-[14px] justify-center font-bold w-full mt-5 flex px-4 py-2 mr-6 rounded-full bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] '>
                <a href="https://discord.com/invite/cAtaPBr2YD" >
                  Join now
                </a>
              </li>
            </ul>
          </div>

          <div className='md:w-[250px] w-full p-7 rounded-lg bg-[#121212]'>
            <h1 className='text-2xl font-bold'>🏅 HiveHub Elite Royalty Plan</h1>
            <p className='text-[16px] font-semibold'>$499.99/month (one-time payment)</p>
            <ul className='flex-col flex pt-3'>
              <li>· 🥇 Access to the HiveHub hive, present and future.</li>              
              <li>· 👑 Exclusive lifetime member privileges.</li>
              <li>· 💼 Top-priority support for your hive journey.</li>
              <li className='items-center text-[14px] justify-center font-bold w-full mt-5 flex px-4 py-2 mr-6 rounded-full bg-gradient-to-r from-[#eec33d] to-[#ea9d3e] text-[#151515] '>
                <a href="https://discord.com/invite/cAtaPBr2YD" >
                  Join now
                </a>
              </li>
            </ul>
          </div>

 
        </div>
      </div>  
    </div>
  )
}

export default Price
