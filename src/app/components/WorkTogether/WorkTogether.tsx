"use client";

export default function WorkTogether() {
  return (
    <div className="p-12 flex flex-row gap-8 justify-center">
      {/* <ServiceCard service="Software Development" description="" /> */}
      {/* <ServiceCard service="Web Development" description="Wesbites" /> */}
      {/* <ServiceCard service="Web 3" description="Smart Contract Auditing" /> */}
      <h1 className="text-2xl font-bold justify-center">
        Want to get in touch? Email &nbsp;
        <a href="mailto:me@nabeelahmed.co.uk"> me@nabeelahmed.co.uk </a>
      </h1>
    </div>
  );
}

// const ServiceCard = ({ service, description }) => {
//   return (
//     <div className="card w-96 bg-base-300 shadow-xl">
//       <figure className="px-10 pt-10">
//         {/* <img
//           className="rounded-xl"
//         /> */}
//       </figure>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title">{service}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };
