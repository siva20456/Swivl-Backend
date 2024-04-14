const { getDb } = require('./db');

async function createDiaryEntry(entry) {
    const db = getDb();
    const result = await db.collection('travel_dairy_entries').insertOne(entry);
    return result.insertedId;
}

async function getDiaryEntries() {
    const db = getDb();
    return db.collection('travel_dairy_entries').find().toArray();
}

async function getEntryByNum(num) {
    const db = getDb();
    return db.collection('travel_dairy_entries').findOne({entry_no:num});
}

async function updateEntry(newEntry) {
    const db = getDb();
    // const filter = { entry_no: };
    const result = await db.collection('travel_dairy_entries').updateOne({entry_no:newEntry.entry_no}, {$set : newEntry});
    return result
}

async function deleteEntry(num){
    const db = getDb();
    const result = await db.collection('travel_dairy_entries').deleteOne({entry_no:num});
    return result
}

module.exports = { createDiaryEntry, getDiaryEntries, getEntryByNum, updateEntry, deleteEntry };
