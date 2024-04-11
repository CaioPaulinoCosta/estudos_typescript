 interface Point {
    x: number
    y: number
    z: number
 }

 function showCoords(obj: Point) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
 }

 const coordObj:Point= {
    x: 10,
    y: 15,
    z: 20
 }

showCoords(coordObj)