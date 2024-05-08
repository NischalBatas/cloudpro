import Newsletter from "@/components/Page/CaseStudy/caseDetails/Content/Newsletter";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      {children}

      <Newsletter/>
    </>
  );
};

export default ProtectedLayout;
