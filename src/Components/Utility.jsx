export const addQuantity = (arr) => {
    const res = arr.map((item)=>{
        return{...item, Quantity:11,userQuantity:0}
    })
    return res
}