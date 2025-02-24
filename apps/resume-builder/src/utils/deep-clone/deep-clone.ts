export const deepClone = (obj: any, map = new Map()) => {
    if (typeof obj !== 'object' && obj === null) return obj

    const newObj = Object.create(null)

    for(let key of obj) {
        console.log(key);
        
    }

}