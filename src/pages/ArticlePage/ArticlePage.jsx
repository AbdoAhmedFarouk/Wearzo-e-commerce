import { useLocation, useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';

import blogBoxesData from '../../assets/blogBoxesData';

function ArticlePage() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const parentPathName = pathname.substring(1, pathname.indexOf('s') + 1);

  const existingBlog = blogBoxesData.find((blogId) => blogId.id === +id);

  const pageName = existingBlog.title.slice(0, -5);

  return (
    <div>
      <SectionTag>
        <PageTitle
          header={pageName}
          text={parentPathName}
          urlRouteLink={`/${parentPathName.toLowerCase()}`}
          childRouteText={pageName}
        />

        <div>
          <Container styles="text-primaryColor">
            <div className="border border-fourthColor p-2 duration-700 xxs:p-[15px]">
              <div className="mb-[15px] overflow-hidden md:mb-6">
                <img
                  className="h-full w-full"
                  src={existingBlog.image}
                  alt={existingBlog.image}
                />
              </div>

              <div>
                <h4
                  className="mb-2.5 text-sm font-medium uppercase
                    leading-none text-secondaryColor md:mb-[15px]"
                >
                  JUNE 19, 2001
                </h4>

                <p className="mb-2.5 text-base font-bold md:mb-4 md:text-2xl md:leading-6">
                  {existingBlog.title}
                </p>

                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </Container>
        </div>
      </SectionTag>
    </div>
  );
}

export default ArticlePage;
