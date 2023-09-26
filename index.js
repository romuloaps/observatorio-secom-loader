import { SicomDataDownloader, MeiosDeComunicacao } from "./modules/download/sicom-data-downloader.js";

const downloader = new SicomDataDownloader();
const anoAtual = new Date(Date.now()).getFullYear();

let params = [];
for (let ano = 2023; ano <= anoAtual; ano++) {
    Object.values(MeiosDeComunicacao).forEach(async (meio) => {
        params.push({
            ano_acao: ano.toString(),
            meio: meio,
        });
    });
}

downloader.download(params).then((data) => console.log("F"));
