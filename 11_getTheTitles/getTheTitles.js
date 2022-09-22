const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]


const getTheTitles = (books) => {
    const results = books.map((books) => books.title);
    return results;
};

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;

// expect(getTheTitles(books)).toEqual(['Book', 'Book2']);
