import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class negociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(res => { return res.json()})
        .then((dados: Array<NegociacoesDoDia>) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(),
                    dadoDeHoje.vezes,
                    dadoDeHoje.montante
                )
            })
        })
    }
}