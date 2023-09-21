import {
   Html,
   Body,
   Head,
   Heading,
   Hr,
   Container,
   Preview,
   Section,
   Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
   message: string;
};

const ContactFormEmail = ({ message }: ContactFormEmailProps) => {
   return (
      <Html>
         <Head />
         <Preview>New message from your portfolio site</Preview>
         <Tailwind>
            <Body className='bg-gray-100'>
               <Container>
                  <Section className='bg-white border-black my-10 px-10 py-4 rounded-md'>
                     <Heading className='leading-tight'>
                        You receive the following message from the contact form
                     </Heading>
                     <Text>{message}</Text>
                     <Hr />
                  </Section>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   );
};

export default ContactFormEmail;
