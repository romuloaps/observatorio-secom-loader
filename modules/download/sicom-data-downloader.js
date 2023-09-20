import { decode } from "windows-1252";
import { stringify } from "qs";
import { DownloadError } from "./download-error.js";

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

        // try {
        //     const response = await fetch(this.getFullURL(params), {
        //         method: "post",
        //     });
        //     console.log(response);
        //     if (!response.ok) {
        //         throw new DownloadError(`Erro ao requisitar a URL ${this.getFullURL(params)} - Status: ${response.status}, ${response.statusText}`);
        //     }

        //     const data = await response.arrayBuffer();
        //     return decode(Buffer.from(data));
        // } catch (err) {
        //     if (err instanceof DownloadError) throw err;
        //     else {
        //         throw new Error(`Ocorreu um erro ao tentar realizar o download: ${err.message}`);
        //     }
        // }
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
