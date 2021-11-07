/**
 * 
 * @TODO Explain what this code does
 * 
 */

function searchTree() {
    const input = document.getElementById("dnd-search-input")
    const searchResultsElement = document.getElementById("search-results")
    const wikiPageValues = document.querySelectorAll("div.list-group-item")
    let searchValue = input.value.toUpperCase()
    let displayValues = []

    // Remove all existing results if they exist
    $("#search-results *").each(function() {
        this.remove()
    })

    // If nothing in the search box, terminate
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
                    let newFile = $(folderOrFile).clone(true)
                    // Add file to array that'll populate HTML
                    newFile.removeAttr("style")
                    displayValues.push(newFile)
                } 
            }
        })
    })

    // Add values to the search results HTML
    displayValues.forEach(folder => {
        $(searchResultsElement).append(folder)
    })
}