import { stringify } from "qs";
import { decode } from "windows-1252";

export class SicomDataDownloader {
    constructor() {
        this.url = "https://gestaosecom.mcom.gov.br/gestaosecom/seguranca/dados-abertos/veiculacoes-autorizadas";
        this.charset = "iso-8859-1";
    }

    async download(params) {
        const promises = params.map((param) =>
            fetch(this.getFullURL(param), {
                method: "post",
            })
                .then((response) => response.arrayBuffer())
                .then((buffer) => decode(Buffer.from(buffer)))
        );

        return Promise.all(promises);
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
