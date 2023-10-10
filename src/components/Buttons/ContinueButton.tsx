import Image from "next/image";

const ContinueButton = ({ buttonDisabled }: { buttonDisabled: boolean }) => {
    return (
        <button disabled={buttonDisabled} className="btn btn-main d-flex gap-3 align-items-center ps-4 pe-4 ">
            <span>Continue</span>
            <Image fill src="/icons/Seta-proximo.svg" alt="Ícone Seta próximo" />
        </button>
    );
}

export default ContinueButton;