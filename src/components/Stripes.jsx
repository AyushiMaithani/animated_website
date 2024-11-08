import Stripe from "./Stripe"

function Stripes() {
    var data=[
        {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",num:23
    },
    {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",num:23
    },
    {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",num:23
    },
    {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",num:23
    },
    {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",num:23
    },
    {
        url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",num:23
    },
]
    
  return (
   <div className="flex pt-14">
    {data.map((item,index)=>
    <Stripe key={index} val={item}/>)}
   </div>
   
  )
}

export default Stripes