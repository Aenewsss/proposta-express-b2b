import { routes } from "@components/constants/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <main>
      <section className="vh-100 d-flex justify-content-center align-items-center flex-column container">
        <h1 className="fs-64 ff-arame text-main text-center">SEJA BEM-VINDO A</h1>
        <Image fill src="/images/Proposta-express-logo.svg" alt="Logo Proposta Express" />
        <div className="d-flex flex-column gap-3 buttons-news mt-5">
          <Link href={routes.briefing_first_stage} className="btn btn-outline-main br-25 ff-arame text-main fs-40">Nova proposta</Link>
          <Link href={routes.briefing_first_stage} className="btn btn-outline-dark br-25 ff-arame  fs-40">novo briefing</Link>
        </div>
      </section>
    </main>
  )
}