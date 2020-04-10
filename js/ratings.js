function collect_ratings() {
    let rating = 0;
    const ratings = { count: 0, sum: 0, average: 0 };

    const elements = document.querySelectorAll('.rating');

    elements.foreach(element => {
        rating = element.id.replace('star', '');
    });

    console.log(element.id);
}

