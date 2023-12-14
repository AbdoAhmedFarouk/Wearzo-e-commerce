import Container from '../../components/Container/Container';
import BlogPageBox from '../../components/BlogPageBox/BlogPageBox';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBox from '../../components/SideProductBox/SideProductBox';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';

function BlogPage() {
  return (
    <SectionTag>
      <PageTitle text="blog" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          <div className="md:col-span-3">
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

            <div
              className="hidden bg-white p-[15px]
              shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
              md:block md:p-5 2xl:px-5 2xl:py-[30px]"
            >
              <SideProductBox styles="mb-[30px]" />
              <SideProductBox styles="mb-[30px]" />
              <SideProductBox />
            </div>

            {/* {isAbSideProductListMenuOpen ? (
              <div
                className="visible h-[389.75px]
          overflow-hidden bg-white p-[15px] opacity-100
          shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
          duration-700 md:hidden"
              >
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox />
              </div>
            ) : (
              <div
                className="invisible h-0
          overflow-hidden bg-white p-[15px] opacity-0
          shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
          duration-700 md:hidden"
              >
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox styles="md:mb-[30px] mb-5" />
                <SideProductBox />
              </div>
            )} */}

            <SideBarBanner />
          </div>

          <div
            className="grid grid-cols-1 gap-5
            md:col-span-9 md:grid-cols-2 md:gap-[30px]"
          >
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
