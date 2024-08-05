import { useState } from 'react';
import { send } from 'emailjs-com';

import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-2.5 max-h-10 text-primaryColor`;

function ContactusPage() {
  const [toSend, setToSend] = useState({
    'contact-first-name': '',
    'contact-last-name': '',
    'contact-message': '',
    reply_to: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    send('service_ilh7vsm', 'contact_form', toSend, 'ORr_THHKAlYSfmWVY')
      .then(() => {
        setSuccessMsg('Your message has been sent successfully.');
      })
      .catch(() => {
        setErrorMsg('Failed to send your message!');
      });

    setToSend({
      'contact-first-name': '',
      'contact-last-name': '',
      'contact-message': '',
      reply_to: '',
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
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
            {errorMsg ? (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${errorMsg && 'bg-red-200 px-4 py-1.5 text-red-800'}`}
              >
                {errorMsg && errorMsg}
              </p>
            ) : (
              successMsg && (
                <p
                  className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  successMsg && 'bg-green-200 px-4 py-1.5 text-green-800'
                }`}
                >
                  {successMsg && successMsg}
                </p>
              )
            )}

            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div
                className="grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="contactFirstNameInp"
                >
                  First name
                </label>

                <Input
                  styles={`col-span-5 m-auto ${inputDefaultStyles}`}
                  id="contactFirstNameInp"
                  type="text"
                  name="contact-first-name"
                  required
                  value={toSend['contact-first-name']}
                  onChangeHandler={handleChange}
                />
              </div>

              <div
                className="my-5 grid grid-cols-1
                items-center sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="contactLastNameInp"
                >
                  Last name
                </label>

                <Input
                  styles={`col-span-5 m-auto ${inputDefaultStyles}`}
                  id="contactLastNameInp"
                  type="text"
                  name="contact-last-name"
                  required
                  value={toSend['contact-last-name']}
                  onChangeHandler={handleChange}
                />
              </div>

              <div
                className="mb-5 grid grid-cols-1
                items-center sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="contactEmailInp"
                >
                  Email address
                </label>

                <Input
                  styles={`col-span-5 m-auto ${inputDefaultStyles}`}
                  id="contactEmailInp"
                  type="email"
                  name="reply_to"
                  required
                  value={toSend.reply_to}
                  onChangeHandler={handleChange}
                />
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
                  border border-fourthColor px-[15px] py-2 outline-0"
                  id="msg-area-field"
                  name="contact-message"
                  required
                  placeholder="How can we help ?"
                  value={toSend['contact-message']}
                  onChange={handleChange}
                />
              </div>

              <div className="text-right">
                <MainButton
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
