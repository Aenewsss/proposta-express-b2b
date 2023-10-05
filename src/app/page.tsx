import Image from "next/image";

export default function Main() {
  return (
    <main >
      <section className="vh-100 d-flex justify-content-center align-items-center flex-column container">
        <h1 className="fs-64 ff-arame text-main text-center">SEJA BEM-VINDO A</h1>
        <Image fill src="/images/Proposta-express-logo.svg" alt="Logo Proposta Express" />
        <div className="d-flex flex-column gap-3 mt-5">
          <button className="btn btn-outline-main br-25 ff-arame text-main fs-40">Nova proposta</button>
          <button className="btn btn-outline-dark br-25 ff-arame  fs-40">novo briefing</button>
        </div>
      </section>
    </main>
  )
}
