const FirstBriefingForm = ({ setButtonDisabled }: { setButtonDisabled: any }) => {

    return (
        <form className="p-2">
            <div className="mb-3 d-flex flex-column gap-2">
                <label htmlFor="" className="fw-bold">Qual é o nome do seu cliente? Ou da empresa dele?</label>
                <input placeholder="Ex: Martinelli Tech" type="text" className="form-control" />
            </div>
        </form>
    );
}

export default FirstBriefingForm;