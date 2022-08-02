let marks =[
    {
        student:"me",
        mark: 23,
    },
    {
        student:"har",
        mark: 52,
    },
    {
        student:"yo",
        mark: 87,
    },
    {
        student:"i",
        mark: 65,
    }
]

let div = marks.map(element => {
    return { ...element, class: "VI"}
})

console.log(div)
//marks.shift() ---- deletes the first element
//splice(1,3)  delete from 1 to 3 index element( 2nd to 4th)