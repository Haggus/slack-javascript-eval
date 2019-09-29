import evaluateIncomingJS from '../../lib/eval';

export default async (req, res) => {
  const response_type = 'in_channel';

  if (!req.body.text) {
    res.setHeader('Content-Type', 'application/json');
    return res.json({ response_type, text: '```Error: Missing source code to evaluate```' });
  }

  let result, attachments;

  try {
    // Pass code to function imported through eval
    result = evaluateIncomingJS(req.body.text, 2500);
  } catch (error) {
    // Capture any errors
    result = 'Error: ' + error.message;
    attachments = [{ text: error.stack }];
  }

  const message = '`' + req.body.text + '` ```' + result + '```';

  res.setHeader('Content-Type', 'application/json');
  // Create response object and send result back to Slack
  res.json({ response_type, text: message, attachments });
};
