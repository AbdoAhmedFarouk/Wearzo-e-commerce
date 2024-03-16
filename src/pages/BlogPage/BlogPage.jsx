import Container from '../../components/Container/Container';
import BlogPageBox from '../../components/BlogPageBox/BlogPageBox';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';

function BlogPage() {
  return (
    <SectionTag>
      <PageTitle text="blog" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-16 gap-[30px]">
          <div>
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              // isOpen={isAbSideProductListMenuOpen}
              // onClick={handleOpenSideProductList}
            >
              <h3
                className="text-base font-medium
                uppercase leading-5 md:text-sm"
              >
                bestsellers
              </h3>
            </MobileMenuHeader>

            <SideBarBanner />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]">
            {/* ${
          isAbSideProductListMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
        } */}

            <BlogPageBox />
            <BlogPageBox />
            <BlogPageBox />
            <BlogPageBox />
            <BlogPageBox />
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default BlogPage;
