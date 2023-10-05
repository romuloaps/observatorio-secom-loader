import { SicomDataDownloader } from "./sicom-data-downloader";

it("deve ter charset padrão como iso-8859-1 ao instanciar", () => {
    const downloader = new SicomDataDownloader();
    expect(downloader.charset).toBe("iso-8859-1");
});
