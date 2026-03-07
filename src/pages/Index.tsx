import ContentWarningModal from "@/components/ContentWarningModal";
import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import DataDashboardSection from "@/components/DataDashboardSection";
import MemoryGallerySection from "@/components/MemoryGallerySection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <ContentWarningModal />
      <SiteNav />
      <main>
        <HeroSection />
        <TimelineSection />
        <DataDashboardSection />
        <MemoryGallerySection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
