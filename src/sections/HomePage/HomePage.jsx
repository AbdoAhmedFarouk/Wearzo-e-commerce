import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';

function HomePage() {
  return (
    <section className="flex md:h-[411.8px] lg:h-[624.8px] 2xl:h-[626.8px]">
      <Aside />
      <Content />
    </section>
  );
}

export default HomePage;
