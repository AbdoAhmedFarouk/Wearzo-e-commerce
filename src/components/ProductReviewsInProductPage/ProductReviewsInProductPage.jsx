import { useRecoilState } from 'recoil';
import { isProductPageLinksStepsNaved } from '../../atoms/linksNavigationSteps';

function ProductReviewsInProductPage() {
  const [step, setStep] = useRecoilState(isProductPageLinksStepsNaved);

  const handleDescriptionNavigation = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReviewsNavigation = () => {
    if (step < 2) setStep(step + 1);
  };

  const handlePageLoading = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="mt-[10px] w-full sm:mt-5 md:mt-[30px] lg:mt-20
        2xl:mt-[50px]"
    >
      <ul
        className="flex items-center justify-center space-x-4 border-t
          border-fourthColor text-center text-sm font-medium uppercase
          leading-5 text-secondaryColor xxs:space-x-11 lg:text-base"
      >
        <li onClick={handleDescriptionNavigation}>
          <a
            className={`hover-animation relative inline-block py-2 xxs:py-2.5 md:py-[15px] ${
              step <= 1 ? 'steps-active' : 'links-hover-effect'
            }`}
            href="#"
            onClick={handlePageLoading}
          >
            description
          </a>
        </li>

        <li onClick={handleReviewsNavigation}>
          <a
            className={`hover-animation relative inline-block py-2 xxs:py-2.5 md:py-[15px] ${
              step >= 2 ? 'steps-active' : 'links-hover-effect'
            }`}
            href="#"
            onClick={handlePageLoading}
          >
            reviews
          </a>
        </li>
      </ul>

      <div
        className="space-y-4 border-b border-t border-fourthColor
          p-[15px] pb-[5px] text-base text-secondaryColor md:px-0
          md:py-5 md:pb-2.5"
      >
        {step <= 1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem dignissimos et, ipsa distinctio unde libero delectus
            ut molestiae nesciunt non sequi veniam. Molestias assumenda nemo non
            dolor veniam quibusdam repellat cupiditate, perferendis odit aliquam
            nihil nostrum excepturi nulla? Eaque totam perferendis doloremque
            tempora illo voluptas vel ratione at maxime, incidunt id sequi
            asperiores harum cumque ea eligendi quasi dolorum quidem accusantium
            pariatur! Nesciunt sint, tenetur totam quo velit tempore quae porro?
            Distinctio, vero. Quos minus magni molestiae officia dolore autem, a
            voluptates ullam tempore est enim reiciendis similique ea
            consequatur repellat aspernatur minima eligendi laborum blanditiis
            rem incidunt nesciunt perferendis ut dolores. Sit assumenda, tenetur
            sint nihil veritatis consequuntur perferendis unde ut nesciunt
            cumque quidem a ullam quam et nostrum hic, facere obcaecati aut
            perspiciatis fugiat. Velit, eligendi iste tempore architecto, illum
            laboriosam asperiores sed repudiandae facere aut numquam! Quibusdam
            reprehenderit repellat delectus sit voluptas esse iure! Ab natus
            ratione ipsam quis voluptas. Numquam ex facilis animi repellat
            commodi, modi autem quia debitis voluptatem optio vel iure sunt
            facere atque consequuntur vitae non fuga. Culpa illo ab nobis et, at
            maxime iusto reprehenderit odio vitae eum dolorem magni qui quos
            praesentium est cum iste blanditiis quae quas! Cum, explicabo
            magnam.
          </p>
        )}

        {step >= 2 && (
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductReviewsInProductPage;
