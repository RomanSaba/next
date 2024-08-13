import React from 'react'

const page =() =>{
   return(
   <div><figure className="md:flex bg-violet-900 rounded-xl p-8 md:p-0 dark:bg-slate-800 bg-white shadow rounded font-mono hover:bg-violet-700 ">
   <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/my-pic.jpg" alt="" width="384" height="512"></img>
   
   <div className="pt-6 md:p-8 text-center md:te space-y-4">
     <div className=' text-sky-50'>
       <p className="text-lg font-medium">
         “ Hi, I'm Roman Saba .I'm currently studying BSCS  at Aspire college .I recently  learned  full stack web development 
         from KFUEIT. I have command in HTML, CSS ,js and PHP. ”
       </p>
     </div>
     <figcaption className="font-medium">
       <div className="text-violet-300 dark:text-sky-100">
         ROMAN SABA
       </div>
       <div className="text-sky-70 text-sky-50">
         WEB DEVELOPER ,Rahim Yar Khan
       </div>
     </figcaption>
   </div>
 </figure></div>
   )
}

export default page