const { createDiaryEntry, getDiaryEntries, updateEntry, getEntryByNum, deleteEntry } = require('../models/dairyEntry');

async function createEntry(req, res) {
    const { entry_no, title, description, date, location } = req.body;
    const entry = await getEntryByNum(entry_no)
    if(entry){
        res.status(401).send({data:'Entry No already exists'})
    }
    const entryId = await createDiaryEntry({ entry_no, title, description, date, location, });
    res.status(201).send({ entryId, data: 'Entry added successfully' });
}

async function listEntries(req, res) {
    const entries = await getDiaryEntries();
    console.log(entries)
    res.status(201).send(entries);
}

async function getEntry(req,res){
    const {num} = req.body 
    const entry = await getEntryByNum(num)
    if(!entry){
        res.status(401).send({data:'Entry Not Found'})
    }else{
        res.status(201).send({entry})
    }
}


async function upadteEntries(req, res) {
    const  newEntry = req.body
    const entry = await getEntryByNum(newEntry['entry_no'])
    if (!entry) {
        res.status(400).send({ data: 'Entry number should be valid for updation !!' })
    } else {
        const result = await updateEntry( newEntry)
        res.status(201).send({ data: 'Entry Updated..!' })
    }
}

async function deleteEntries(req,res){
    const {entry_no} = req.body
    const entry = await getEntryByNum(entry_no)
    // console.log(entry)
    if(!entry){
        res.status(401).send({data:'Entry Not Found'})
    }else{
        const result = await deleteEntry(entry_no)
        return res.status(201).send({result,data:'Entry Deleted'})
    }
}

module.exports = { createEntry, listEntries, upadteEntries, getEntry, deleteEntries };
