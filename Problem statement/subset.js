let arr = [1,2,3,4,5,6,7];

function getsubset(arr){
    if (arr.length === 0){
        return [[]]
    }

    const firstelement = arr[0];
    const remainingelements = getsubset(arr.slice(1));

    const subsetwithfirst = remainingelements.map(subset => [firstelement, ...subset])
    return [...remainingelements, ...subsetwithfirst];

}

console.log(getsubset(arr))