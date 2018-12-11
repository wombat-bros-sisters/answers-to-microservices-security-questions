var merge = require('easy-pdf-merge');
var fs = require('fs');

fs.readdir("./out", (error, items) => {
    const pdfDocs = items.sort((a, b) => compare(a, b)).map(item => "./out/" + item);
    merge(pdfDocs, "out/book.pdf", function (err) {
        if (err)
            return console.log(err);
        console.log('Success');
    });
});


function compare(a, b) {
    const left = parseInt(a.replace('.pdf', '').substring(1));
    const right = parseInt(b.replace('.pdf', '').substring(1));
    return left - right;
}