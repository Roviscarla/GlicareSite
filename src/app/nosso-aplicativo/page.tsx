import CallToDownload from "../components/call-to-download";
import CallToDownloadSecondary from "../components/call-to-download-secondary";
import ToDoctors from "../components/to-doctors";
import ToPacients from "../components/to-pacients";

export default function NossoAplicativo() {
  return (
    <main>
      <>
        <CallToDownload />
        <ToDoctors />
        <ToPacients />
        {/* <AdBanner
        dataAdClient={process.env.NEXT_PUBLIC_PUBLISHER_ID!}
        dataAdSlot="5697690360"
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
      /> */}
        <CallToDownloadSecondary />
      </>
    </main>
  );
}
