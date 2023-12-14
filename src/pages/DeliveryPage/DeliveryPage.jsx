import { useRecoilState } from 'recoil';
import { isDeliverySideProductMenuOpen } from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';

import Container from '../../components/Container/Container';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import SideProductBox from '../../components/SideProductBox/SideProductBox';

function DeliveryPage() {
  const [isDvSideProductListMenuOpen, setIsDvSideProductListMenuOpen] =
    useRecoilState(isDeliverySideProductMenuOpen);

  const openSideProductListFn = useIsOpen(
    isDvSideProductListMenuOpen,
    setIsDvSideProductListMenuOpen,
  );

  return (
    <SectionTag>
      <PageTitle text="Delivery" />

      <div>
        <Container styles="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          <div className="md:col-span-3">
            <MobileMenuHeader
              styles="flex items-center justify-between
              bg-primaryColor xxxs:px-5 xxxs:py-[15px] text-white
              px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isDvSideProductListMenuOpen}
              onClick={openSideProductListFn}
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

            {isDvSideProductListMenuOpen ? (
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
            )}

            <SideBarBanner />
          </div>

          <div
            className={`h-fit border border-fourthColor
          p-[15px] text-primaryColor duration-700 md:col-span-9
          md:text-justify ${
            isDvSideProductListMenuOpen ? 'mt-0' : '-mt-10 md:mt-0'
          }`}
          >
            <h2 className="mb-[15px] text-lg font-medium">
              Shipments and returns
            </h2>

            <h3 className="mb-[15px] text-sm font-medium">
              Your pack shipment
            </h3>

            <p className="mb-4 text-sm ">
              Packages are generally dispatched within 2 days after receipt of
              payment and are shipped via UPS with tracking and drop-off without
              signature. If you prefer delivery by UPS Extra with required
              signature, an additional cost will be applied, so please contact
              us before choosing this method. Whichever shipment choice you
              make, we will provide you with a link to track your package
              online.
            </p>

            <p className="text-sm">
              Shipping fees include handling and packing fees as well as postage
              costs. Handling fees are fixed, whereas transport fees vary
              according to total weight of the shipment. We advise you to group
              your items in one order. We cannot group two distinct orders
              placed separately, and shipping fees will apply to each of them.
              Your package will be dispatched at your own risk, but special care
              is taken to protect fragile objects.
              <br />
              <br />
              Boxes are amply sized and your items are well-protected.
            </p>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default DeliveryPage;
