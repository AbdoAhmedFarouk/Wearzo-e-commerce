import paymentImg from '../../assets/payment.png';

function PaymentAndCopyright() {
  return (
    <div
      className="before: relative py-[15px] text-center before:absolute
      before:left-0 before:top-0 before:h-[1px] before:w-full
      before:bg-white before:opacity-20 md:py-[25px] md:text-sm lg:text-base"
    >
      <div className="grid">
        <img
          className="cursor-pointer place-self-center"
          src={paymentImg}
          alt={paymentImg}
        />

        <p className="m-auto mt-[15px] w-fit hover:text-thirdColor">
          <a href="#">© 2023 - Ecommerce software by Abdelrahman™</a>
        </p>
      </div>
    </div>
  );
}

export default PaymentAndCopyright;
