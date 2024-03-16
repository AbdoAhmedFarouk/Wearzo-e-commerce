import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import StoreBox from '../../components/StoreBox/StoreBox';

import store1 from '../../assets/store-1.jpg';
import store2 from '../../assets/store-2.jpg';
import store3 from '../../assets/store-3.jpg';
import store4 from '../../assets/store-4.jpg';
import store5 from '../../assets/store-5.jpg';

function StoresPage() {
  return (
    <SectionTag>
      <PageTitle text="stores" />

      <div>
        <Container>
          <div className="m-auto w-3/4 space-y-[15px] p-[15px] text-primaryColor">
            <StoreBox
              img={store1}
              storeName="Dade County"
              streetAddress="3030 SW 8th St Miami"
              cityAddress="Miami, Florida 33135"
              countryAddress="United States"
            />

            <StoreBox
              img={store2}
              storeName="E Fort Lauderdale"
              streetAddress="1000 Northeast 4th Ave Fort Lauderdale"
              cityAddress="Miami, Florida 33304"
              countryAddress="United States"
            />

            <StoreBox
              img={store3}
              storeName="Pembroke Pines"
              streetAddress="11001 Pines Blvd Pembroke Pines"
              cityAddress="Miami, Florida 33026"
              countryAddress="United States"
            />

            <StoreBox
              img={store4}
              storeName="Coconut Grove"
              streetAddress="2999 SW 32nd Avenue"
              cityAddress="Miami, Florida 33133"
              countryAddress="United States"
            />

            <StoreBox
              img={store5}
              storeName="N Miami/Biscayne"
              streetAddress="12055 Biscayne Blvd"
              cityAddress="Miami, Florida 33181"
              countryAddress="United States"
            />
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default StoresPage;
