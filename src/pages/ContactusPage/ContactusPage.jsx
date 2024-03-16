import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

function ContactusPage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SectionTag>
      <PageTitle text="contact us" />

      <div>
        <Container>
          <div
            className="m-auto w-3/4 border border-fourthColor p-[15px]
            text-center text-primaryColor"
          >
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div
                className="grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="contactEmailInp"
                >
                  Email address
                </label>

                <Input
                  styles="col-span-5 m-auto max-h-10 w-full
                  border border-fourthColor px-[15px]
                  py-2.5 text-primaryColor outline-0"
                  id="contactEmailInp"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div
                className="my-4 grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="file-attachment"
                >
                  Attachment
                </label>

                <Input
                  styles="col-span-5 m-auto max-h-full w-full
                  border border-fourthColor px-[15px] text-xs
                  py-2.5 text-primaryColor outline-0 sm:text-sm md:text-base"
                  id="file-attachment"
                  type="file"
                  name="file-attachmed"
                />

                <span className="col-span-2 mt-2 text-sm sm:m-0">optional</span>
              </div>

              <div
                className="mb-4 grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="msg-area-field"
                >
                  Message
                </label>

                <textarea
                  className="col-span-5 min-h-[65px] max-w-full
                  border border-fourthColor px-[15px] py-2"
                  id="msg-area-field"
                  name="message"
                  required
                  placeholder="How can we help ?"
                />
              </div>

              <div className="text-right">
                <ShopNowBtn
                  text="send"
                  styles="border-none hover:bg-thirdColor
                  bg-primaryColor px-[30px] py-2.5 text-sm
                  text-white outline-0 duration-300
                  uppercase"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ContactusPage;
