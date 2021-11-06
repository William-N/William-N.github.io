function searchTree() {
    const input = document.getElementById("dnd-search-input")
    const searchResultsElement = document.getElementById("search-results")
    const wikiPageValues = document.querySelectorAll("div.list-group-item")
    let searchValue = input.value.toUpperCase()
    let displayValues = []

    // clear search-results DOM element when it is populated
    if(searchResultsElement.innerHTML) {
        while(searchResultsElement.childElementCount > 0) {
            let child = searchResultsElement.childNodes.item(0)
            searchResultsElement.removeChild(child)
        }
    }

    // if search value is empty, terminate
    if(!searchValue) {
        return
    }

    wikiPageValues.forEach(folderOrFile => {
        // Each folderOrFile has a singular 'i' tag
        folderOrFile.childNodes.forEach(iTag => {
            // This is a 'file'
            if(iTag.className === "item-icon fas fa-file") {
                // Proceed if the file's name is in the search value
                if(folderOrFile.innerText.toUpperCase().indexOf(searchValue) > -1) {
                    // Create copy of DOM element
                    let newFile = folderOrFile.cloneNode(true)
                    // Add file to array that'll populate HTML
                    newFile.removeAttribute("style")
                    displayValues.push(newFile)
                } 
            }
        })
    })

    // Add values to the search results HTML
    displayValues.forEach(folder => {
        searchResultsElement.appendChild(folder)
    })
}