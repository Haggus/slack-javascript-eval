import evaluateIncomingJS from '../../lib/eval';

export default async (req, res) => {
  let result, attachments;

  try {
    // Pass code to function imported through eval
    result = evaluateIncomingJS(req.body.text, 2500);
  } catch (error) {
    // Capture any errors
    result = error.message;
    attachments = [{ text: error.stack }];
  }

  const message = '`' + req.body.text + '` ```' + result + '```';
  const response_type = 'in_channel';

  res.setHeader('Content-Type', 'application/json');
  // Create response object and send result back to Slack
  res.json({ response_type, text: message, attachments });
};
