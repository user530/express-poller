import { Response } from 'express';

// placeholder storage
const responses: Response[] = [];

export const startPolling = (res: Response) => {
    // Send all other users signal about new one
    signalTheCrew()
    console.log(responses.length)
    // Add user response to a list
    responses.push(res);

    // Sing him a song to keep him excited
    singASong(res)();
};

const signalTheCrew = () => {
    responses.forEach(
        res => res.write('New user joined the crew!')
    );
}

const singASong = (response: Response) => {
    let men = 15;

    return function singAVerse() {
        // Get song verse
        const verse = getVerse(men);

        // Stream the verse
        response.write(verse);

        // Set up next verse if needed
        if (--men > 0)
            setTimeout(singAVerse, 1000);
    }
}

const getVerse = (men: number) => {
    return men > 0
        ? men === 1
            ? 'With one man of her crew alive,\nWhat put to sea with seventy-five.'
            : `${men} men on the dead man's chest—\n...Yo-ho-ho, and a bottle of rum!\nDrink and the devil had done for the rest—\n...Yo-ho-ho, and a bottle of rum!\n`
        : 'STOP RIGHT THERE CRIMINAL SCUM!';
}