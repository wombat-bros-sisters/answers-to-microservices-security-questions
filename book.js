var markdownpdf = require("markdown-pdf");
var fs = require('fs');

["./core-service", "./edge-services", "./middleware"].forEach(folder => {
    fs.readdir(folder, (error, items) => {
        const sourceDocs = items.map(item => folder + "/" + item);
        const pdfDocs = items.map(item => "out/" + item.replace(".md", ".pdf"));
        markdownpdf({
            cssPath: './css/github-markdown.css'
        }).from(sourceDocs).to(pdfDocs, function () {
            pdfDocs.forEach(function (d) {
                console.log("Created", d)
            });
        });
    });
});
