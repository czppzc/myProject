function getSame(arr) {
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++
        } else {
            hash[arr[i]] = 1
        }
    }
    return Object.keys(hash).filter(v => hash[v] > 1)
}
getSame(['1', '2', '3', '4', '4', '1', '1'])