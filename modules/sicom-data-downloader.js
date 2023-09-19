import { decode } from "windows-1252";
import axios from "axios";
import { stringify } from "qs";

export class SicomDataDownloader {
    constructor() {
        this.url = "https://gestaosecom.mcom.gov.br/gestaosecom/seguranca/dados-abertos/veiculacoes-autorizadas";
    }

    async download(params) {
        try {
            const response = await axios.post(this.url, null, {
                params: params,
                paramsSerializer: (params) => paramsSerializerISO88591(params),
                responseType: "arraybuffer", // O server retorna em ISO-8859-1, por isso o post recebe em binary para fazer o decode
                responseEncoding: "binary",
            });

            return decode(response.data);
        } catch (err) {
            console.log(err);
            return null;
        }

        function paramsSerializerISO88591(params) {
            return stringify(params, {
                charset: "iso-8859-1",
            });
        }
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
