const SecondBriefingForm = ({ setButtonDisabled }: { setButtonDisabled: any }) => {
    return (
        <form className="p-2">
            <div className="mb-3 d-flex flex-column gap-2">
                <label htmlFor="" className="fw-bold">Qual é a cor principal da sua marca?</label>
                <input placeholder="Ex: Martinelli Tech" type="color" className="form-control" />
                <span>* Selecione uma cor clicando no campo acima</span>
            </div>
        </form>
    );
}

export default SecondBriefingForm;