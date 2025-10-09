import CallToDownloadSecondary from "../components/call-to-download-secondary";
import NossoApp from "../components/nosso-aplicativo";
import ToCompanions from "../components/to-companion";
import ToDoctors from "../components/to-doctors";
import ToPacients from "../components/to-pacients";

export default function NossoAplicativo() {
  return (
    <main>
      <NossoApp />
      <ToDoctors />
      <ToPacients />
      <ToCompanions />
      <CallToDownloadSecondary />
    </main>
  );
}
