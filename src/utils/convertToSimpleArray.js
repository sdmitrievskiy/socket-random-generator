export default function(arrays) {
    return arrays.reduce((flat, current) => {
        return flat.concat(current);
    }, []);
}
