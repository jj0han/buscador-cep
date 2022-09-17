export default function Form({ dados, handle }) {
    return(
        <form className="Main">
            <h1>Preenchimento automático por CEP</h1>
            <fieldset>
                <legend className="legend">Endereço</legend>
                <input
                    className="input"
                    name="cep"
                    placeholder="CEP"
                    value={dados.cep}
                    onChange={handle}
                />
                <input
                    className="input"
                    name="localidade"
                    placeholder="Localidade"
                    value={dados.localidade}
                    onChange={handle}
                />
                <input
                    className="input"
                    name="uf"
                    placeholder="UF"
                    value={dados.uf}
                    onChange={handle}
                />
                <input
                    className="input"
                    name="bairro"
                    placeholder="Bairro"
                    value={dados.bairro}
                    onChange={handle}
                />
                <input
                    className="input"
                    name="logradouro"
                    placeholder="Logradouro"
                    value={dados.logradouro}
                    onChange={handle}
                />
            </fieldset>
            <small>Desenvolvido por João Bomfim</small>
        </form>
    )
}