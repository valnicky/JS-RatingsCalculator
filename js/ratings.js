function collect_ratings() {
    const ratings = { 'count': 0, 'sum': 0, 'average': 0 };

    let rating = 0;
    const elements = document.querySelectorAll('.rating');

    elements.forEach(element => {
        rating = parseInt(element.id.replace('star', ''));
        ratings.sum = parseInt(element.value) * rating;
        ratings.count = + parseInt(element.value);
    });
    if (ratings.count !== 0) {
        let average = sum / count;
    }

    return ratings;
    console.log(ratings);
}

document.addEventListener('change', () => {
    let ratings = collect_ratings();
    ratings.average = document.querySelector('#average').value;
};