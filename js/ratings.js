function collect_ratings() {
    let rating = 0;
    let ratings = { count: 0, sum: 0, average: 0 };

    let elements = document.querySelectorAll('.rating');

    elements.foreach(element => {
        rating = element.id.replace('star', '');
    });
}