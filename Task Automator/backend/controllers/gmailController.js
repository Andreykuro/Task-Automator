const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

// Set the refresh token
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const getClassroomEmails = async (req, res) => {
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
    try {
        const response = await gmail.users.messages.list({
            userId: 'me',
            q: 'from:classroom.google.com subject:assignment',
        });
        const messages = response.data.messages || [];
        const tasks = await Promise.all(messages.map(async (message) => {
            const msg = await gmail.users.messages.get({ userId: 'me', id: message.id });
            // Extract task details from msg.data.payload
            return {
                id: message.id,
                title: 'Extracted Title', // Replace with actual extraction logic
                dueDate: 'Extracted Due Date', // Replace with actual extraction logic
                description: 'Extracted Description', // Replace with actual extraction logic
            };
        }));
        res.json(tasks);
    } catch (error) {
        res.status(500).send('Error fetching emails');
    }
};

const completeTask = (req, res) => {
    // Logic to mark task as complete
    res.send('Task completed');
};

const saveTaskNote = (req, res) => {
    // Logic to save task note
    res.send('Note saved');
};

module.exports = { getClassroomEmails, completeTask, saveTaskNote };