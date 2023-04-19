function downloadFile() {
    let downloadLink = document.createElement("a");
    downloadLink.href = 'archive/curriculum.pdf'
    downloadLink.download = 'curriculum.pdf'
    downloadLink.click()
}