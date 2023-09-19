import { SicomDataDownloader, MeiosDeComunicacao } from "./modules/sicom-data-downloader.js";

const downloader = new SicomDataDownloader();

for (let ano = 2023; ano <= 2023; ano++) {
    Object.values(MeiosDeComunicacao).forEach(async (meio) => {
        let params = {
            ano_acao: ano.toString(),
            meio: meio,
        };

        let csv = await downloader.download(params);
        console.log(csv);
    });
}
