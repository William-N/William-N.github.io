function searchTree() {
    // Declare variables
    let input = document.getElementById("dnd-search-input")
    let wikiPageValues = document.querySelectorAll("div.list-group-item")
    let searchValue = input.value.toUpperCase()
    let searchResultsElement = document.getElementById("search-results")
    let displayValues = []

    searchResultsElement.innerHTML = ""

    // if search value is empty, terminate
    if(!searchValue) {
        return
    }

    wikiPageValues.forEach(folderOrFile => {
        // Each folderOrFile has a singular 'i' tag
        folderOrFile.childNodes.forEach(iTag => {
            // This is a 'file'
            console.log(iTag)
            if(iTag.className === "item-icon fas fa-file") {
                // Proceed if the file's name is in the search value
                if(folderOrFile.innerText.toUpperCase().indexOf(searchValue) > -1) {
                    // Add file to array that'll populate HTML
                    displayValues.push(folderOrFile)
                } 
            }
        })
    })

    // Add values to the search results HTML
    displayValues.forEach(elem => {
        searchResultsElement.appendChild(elem)
    })
}