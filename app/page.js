import AppointmentBookingBlock from "@/components/Home/AppointmentBookingBlock";
import HealthCareBlock from "@/components/Home/HealthCareBlock";
import HomeHeroicBlock from "@/components/Home/HomeHeroicBlock";
import InfographicsBlock from "@/components/Home/InfographicsBlock";
import CorePrinciplesBlock from "@/components/Home/CorePrinciplesBlock";
import SupportingPartnersBlock from "@/components/Home/SupportingPartnersBlock";
import WorkingHoursSection from "@/components/Home/WorkingHoursSection";
import WebsiteLayout from "@/components/layouts/website";
import PurposeSection from "@/components/Home/PurposeSection";
import PatientTestimonials from "@/components/Home/PatientTestimonials";
import PatientStories from "@/components/patients/PatientStories";


export default function Home() {
  return (
    <WebsiteLayout>
      <main>
        <HomeHeroicBlock />
        <InfographicsBlock />
        <PatientStories/>
        {/* <ServicesCardsBlock /> */}
        
        <PurposeSection />
        <CorePrinciplesBlock />
        {/* <HealthCareBlock /> */}
        <SupportingPartnersBlock />
        <PatientTestimonials/>
        
        {/* <PerformanceSnapshot/> */}
        <WorkingHoursSection />
        <AppointmentBookingBlock />
        
      </main>
    </WebsiteLayout>
  );
}