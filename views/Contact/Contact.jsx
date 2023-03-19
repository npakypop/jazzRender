import Container from 'components/Container/Container';
import Form from './Form';
import { useInView } from 'react-intersection-observer';

const Contact = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!data) {
    return null;
  }

  return (
    <section id="contact" ref={ref}>
      <Container>
        <h2 className="sectionTitle mt-[50px] mb-[24px] text-center font-bold tracking-wide md:mb-[32px] md:text-left xl:mb-[76px]">
          Contacts
        </h2>
        <p className="contact__text">
          Make request using form below or send e-mail to{' '}
          <a
            href={`mailto:${data.email}`}
            className="text-mainBlack hover:underline focus:underline"
          >
            {data.email}
          </a>
        </p>
        {inView && <Form price={data.price} projectTypes={data.projectTypes} />}
      </Container>
    </section>
  );
};
export default Contact;
