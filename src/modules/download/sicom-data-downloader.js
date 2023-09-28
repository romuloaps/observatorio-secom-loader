import { stringify } from "qs";
import { decode } from "windows-1252";

export class SicomDataDownloader {
    constructor() {
        this.url = "https://gestaosecom.mcom.gov.br/gestaosecom/seguranca/dados-abertos/veiculacoes-autorizadas";
        this.charset = "iso-8859-1";
    }

    async download(params) {
        return await Promise.all(
            params.map((param) => {
                console.log(`In: ${param.ano_acao} - ${param.meio}`);
                return this.requestFile(param);
            })
        );
    }

    async requestFile(param) {
        const response = await fetch(this.getFullURL(param), { method: "post" });
        const buffer = await response.arrayBuffer();

        console.log(`P: ${param.ano_acao} - ${param.meio}`);
        return decode(Buffer.from(buffer), this.charset);
    }

    getFullURL(params) {
        return `${this.url}?${stringify(params, { charset: this.charset })}`;
    }
}

export const MeiosDeComunicacao = Object.freeze({
    CINEMA: "Cinema",
    INTERNET: "Internet",
    JORNAL: "Jornal",
    MIDIA_EXTERIOR: "Mídia Exterior",
    MIDIA_EXTERIOR_DIGITAL: "Mídia Exterior Digital",
    RADIO: "Rádio",
    REVISTA: "Revista",
    TELEVISAO: "Televisão",
});
