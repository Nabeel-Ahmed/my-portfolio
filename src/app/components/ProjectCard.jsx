import Image from "next/image";

function ProjectCard({ imageUrl, altText, title, badges, description }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imageUrl}
          alt={altText}
          width={500}
          height={100}
          basePath="/my-portfolio"
          // You can adjust width and height props as needed
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-1 flex-wrap">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-secondary">
              {badge}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
