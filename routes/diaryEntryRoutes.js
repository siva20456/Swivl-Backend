const express = require('express');
const { createEntry, listEntries, upadteEntries, deleteEntries } = require('../controllers/dairyEntryController');
const verifyTheUser = require('../Middlewares/verify');
const { route } = require('./userRoutes');
const router = express.Router();

router.post('/create', createEntry);
router.get('/get',verifyTheUser , listEntries);
router.put('/update',upadteEntries)
router.delete('/delete',deleteEntries)

module.exports = router;
