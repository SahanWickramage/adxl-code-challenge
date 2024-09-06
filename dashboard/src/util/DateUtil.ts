function parseDate(input: string, current: Date): Date {
    console.log("time parse executed!");
    var next;

    try {
        next = new Date(input);
    } catch (e) {
        console.log("something went wrong!");
        next = current;
    }

    return next;
}

function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export { parseDate, formatDate };