import Image from "next/image";

const ThirdBriefingForm = ({ setButtonDisabled }: { setButtonDisabled: any }) => {

    const copyLink = () => {
        
    }
    
    return (
        <div className=" d-flex flex-column justify-content-center align-items-center h-100">

            <Image width={100} height={100} src="/icons/Check-rosa-fundo-roxo.svg" alt="Ícone Check Rosa" />

            <h3 className="fs-28 fw-bold mb-0 mt-3">Link criado com sucesso</h3>
            <h4 className="fs-16 text-black-3e mb-0">Envie esse link para o seu cliente</h4>

            <div className="d-flex justify-content-center mt-3">
                <div className="border border-secondary d-flex rounded">
                    <input readOnly value="www.aenamartinelli.com.br/asdasda" type="text" className="border-0 m-2 text-truncate" />
                    <button className="btn btn-outline-secondary rounded-0 border-end border-top border-bottom d-flex align-items-center gap-2">
                        <Image fill src="/icons/copiar.svg" alt="Ícone Copiar" />
                        <span>Copiar</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThirdBriefingForm;