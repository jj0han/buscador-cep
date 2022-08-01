export default function Form(props) {
    return(
        <form className="Main">
            <h1>Preenchimento automático por CEP</h1>
            <fieldset>
                <legend className="legend">Endereço</legend>
                <input
                    className="input"
                    name="cep"
                    placeholder="CEP"
                    value={props.dados.cep}
                    onChange={props.handle}
                />
                <input
                    className="input"
                    name="localidade"
                    placeholder="Localidade"
                    value={props.dados.localidade}
                    onChange={props.handle}
                />
                <input
                    className="input"
                    name="uf"
                    placeholder="UF"
                    value={props.dados.uf}
                    onChange={props.handle}
                />
                <input
                    className="input"
                    name="bairro"
                    placeholder="Bairro"
                    value={props.dados.bairro}
                    onChange={props.handle}
                />
                <input
                    className="input"
                    name="logradouro"
                    placeholder="Logradouro"
                    value={props.dados.logradouro}
                    onChange={props.handle}
                />
            </fieldset>
            <small>Desenvolvido por João Bomfim</small>
        </form>
    )
}