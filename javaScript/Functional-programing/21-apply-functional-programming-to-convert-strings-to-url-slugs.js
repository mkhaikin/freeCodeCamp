// Only change code below this line
function urlSlug(title) {
    let url = title
        .trim()
        .toLowerCase()
        .split(" ");
    
     return url.filter(word => word.length > 0).join('-');
    
    }
    // Only change code above this line
    urlSlug(" Winter Is  Coming")