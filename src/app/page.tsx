import Script from "next/script";
import { siteConfig } from "../../site.config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import TrustRow from "@/components/TrustRow";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PromoBanner />
                <TrustRow />
                <ServicesGrid />
                <ProcessSteps />
                <Reviews />
                <ServiceArea />
                <About />
                <EstimateForm />
            </main>
            <Footer />
            <Script
                src={siteConfig.scripts.formEmbedScript}
                strategy="lazyOnload"
            />
        </>
    );
}
