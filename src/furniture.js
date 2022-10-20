import { dbConnect } from "./dbConnect.js";
export async function addNewFurniture(req, res) {
    const addNewFurniture = req.body
    const db = dbConnect()
    await db.collection("furniture").insertOne(addNewFurniture)
    .catch(err => {
        res.status(500).send(err)
        return
})


res.status(201).send({ message: 'New Furniture Added.'})
}

export async function getAllFurniture(req,res) {
    const db = dbConnect()
    const collection = await db.collection("furniture").find().toArray()
    res.send(collection)
}

export async function findFunitureByModel(req, res) {
    const db = dbConnect()
    const { search }= req.params
    const collection = await db.collection("furniture")
    .find({ model: search })
    .toArray()

    res.send(collection)
}