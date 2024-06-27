import BlogBox from '../../components/BlogBox/BlogBox';
import HeaderWithArrows from '../../components/H2Header/H2Header';
import WrapperSection from '../../components/WrapperSection/WrapperSection';

import blogBoxesData from '../../assets/blogBoxesData';

function LatestBlogWrapper() {
  return (
    <WrapperSection
      sectionStyles="2xl:mt-20 sm:mt-[30px] md:mt-10
      mt-5 lg:mt-[50px]"
    >
      <HeaderWithArrows header="latest blog" />

      <div
        className="grid grid-cols-1 gap-4 xs:grid-cols-2
        xs:gap-2.5 md:grid-cols-3 md:gap-[30px] 2xl:grid-cols-4"
      >
        {blogBoxesData.map((blog) => (
          <BlogBox
            key={blog.id}
            id={blog.id}
            img={blog.image}
            title={blog.title}
            routingURL={`/blog/article/${blog.id}`}
          />
        ))}
      </div>
    </WrapperSection>
  );
}

export default LatestBlogWrapper;
