// import { Link } from "react-router-dom";
// import { featuredBlogData } from "../../data/blog/featuredBlogData";

import { featuredBlogData } from "@/data/blog/featuredBlogData";
import Link from "next/link";

const FeaturedBlog = () => {
  return (
    <div className="container">
      <div className="py-8 md:py-16">
        <h3 className="font-NotoSerif font-extrabold text-2xl md:text-[32px] mb-6">
          Featured Blog
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredBlogData.map(
            ({
              id,
              img,
              name,
              user,
              date,
              durationToRead,
              topic,
              title,
              description,
            }) => (
              <Link key={id} href={`/blog/${id}`}>
                <div className="bg-[#F9F9F9] p-3 md:p-6 rounded-md">
                  <img className="rounded-lg w-full" src={img} alt="" />
                  <div className="flex items-center gap-3 mt-3 mb-5">
                    {user}
                    <div>
                      <h4 className="font-Inter font-bold text-sm mb-1">
                        {name}{" "}
                      </h4>
                      <p className="font-Inter font-medium text-xs md:text-sm text-black/40 flex items-center gap-2">
                        {date}{" "}
                        <span className="bg-[#000000] w-1 h-1 block rounded-full"></span>{" "}
                        {durationToRead}
                      </p>
                    </div>
                  </div>
                  <h4 className="font-Inter font-bold text-xs md:text-sm text-black/40 mb-2">
                    {topic}
                  </h4>
                  <h5 className="font-openSans font-extrabold text-base md:text-2xl text-black_color mb-2">
                    {title}
                  </h5>
                  <p className="font-SpaceGrotesk text-sm text-black/60">
                    {description}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
