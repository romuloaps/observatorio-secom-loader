import { SicomDataDownloader, MeiosDeComunicacao } from "./modules/download/sicom-data-downloader.js";

const downloader = new SicomDataDownloader();

for (let ano = 2023; ano <= 2023; ano++) {
    Object.values(MeiosDeComunicacao).forEach(async (meio) => {
        let csv = downloader.download({
            ano_acao: ano.toString(),
            meio: meio,
        });
        console.log(csv);
    });
}
