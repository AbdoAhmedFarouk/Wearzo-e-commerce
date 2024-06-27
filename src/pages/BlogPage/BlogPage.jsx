import Container from '../../components/Container/Container';
import BlogBox from '../../components/BlogBox/BlogBox';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

import blogBoxesData from '../../assets/blogBoxesData';

function BlogPage() {
  return (
    <SectionTag>
      <PageTitle text="blogs" />

      <div>
        <Container>
          <div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3
            md:gap-[30px]"
          >
            {blogBoxesData.map((blog) => (
              <BlogBox
                key={blog.id}
                img={blog.image}
                title={blog.title}
                routingURL={`article/${blog.id}`}
              />
            ))}
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default BlogPage;
