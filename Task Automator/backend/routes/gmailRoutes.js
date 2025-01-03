const express = require('express');
const { getClassroomEmails, completeTask, saveTaskNote } = require('../controllers/gmailController');

const router = express.Router();

router.get('/tasks', getClassroomEmails);
router.post('/tasks/:id/complete', completeTask);
router.post('/tasks/:id/note', saveTaskNote);

module.exports = router;