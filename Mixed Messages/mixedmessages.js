const messages = [
    `You're awesome!!`,
    `Did you know that you're awesome?`,
    `Well...what do you want me to say??`,
    `I think Coco fresh knows the answer to that.`,
    `The sky is blue...duh...`
];

const messageSize = messages.length;
const randomMessage = Math.floor(Math.random() * messageSize);


console.log(messages[randomMessage]);