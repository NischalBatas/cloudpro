import ContactInfoMain from "@/components/Page/Services/containers/ContactInfo/ContactInfoMain";

const ProtectedLayout = ({ children }) => {
  return (
  <>
        {children}

        <ContactInfoMain/>
   </>
 
  );
};

export default ProtectedLayout;
