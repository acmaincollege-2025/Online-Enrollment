/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function printSummary(printAreaId, title) {
    var content = document.getElementById(printAreaId).innerHTML;
    var win = window.open('', '', 'width=900,height=650');

    win.document.open();
    win.document.write(
        '<html>' +
        '<head>' +
        '<title>' + title + '</title>' +
        '<style>' +
        'body{font-family:Arial;font-size:12px;margin:20px;}' +
        'h2{text-align:center;}' +
        'table{width:100%;border-collapse:collapse;margin-top:10px;}' +
        'th,td{border:1px solid #000;padding:6px;text-align:left;}' +
        '</style>' +
        '</head>' +
        '<body>' +
        content +
        '</body>' +
        '</html>'
    );
    win.document.close();

    win.focus();
    win.print();
    win.close();
}


