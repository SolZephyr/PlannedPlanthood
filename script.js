
const TAGS = {
    robust: "Tålig",
    green: "Grönska",
    flower: "Blommor",
    colorful: "Färgstark",
    sunloving: "Solälskande",
    air: "Luftfuktande",
    decorative: "Dekorativ",
    edible: "Ätbart",
    easy: "Lättodlad",
    fragrant: "Doftande",
    fast: "Snabbväxande"
    // Kryddor?
};

const posts = [
    {
        id: 1,
        title: "Gurka",
        content: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
        tags: ["flower", "edible", "green"],
        author: "Coolio",
        avatar: "/Assets/images/avatars/avatar-1.svg",
        date: "2024-04-01"
    },
    {
        id: 2,
        title: "Tomat",
        content: "En perfekt grönsak att odla på balkongen eller i trädgården. Ger riklig skörd under sommaren.",
        tags: ["sunloving", "easy", "edible"],
        author: "Anna Odlare",
        avatar: "/Assets/images/avatars/avatar-2.svg",
        date: "2024-12-05"
    },
    {
        id: 3,
        title: "Pelargon",
        content: "En vacker och lättskött blomma som trivs både inne och ute under sommaren.",
        tags: ["decorative", "colorful", "robust", "flower"],
        author: "Blomsterkalle",
        avatar: "/Assets/images/avatars/avatar-3.svg",
        date: "2024-12-03"
    },
    {
        id: 4,
        title: "Basilika",
        content: "En fantastisk krydda för pastarätter och sallader. Trivs bäst i ett soligt fönster.",
        tags: ["edible", "fragrant", "sunloving"],
        author: "Krydd-Malin",
        avatar: "/Assets/images/avatars/avatar-4.svg",
        date: "2024-12-07"
    },
    {
        id: 5,
        title: "Sallad",
        content: "Sallad är en av de enklaste grönsakerna att odla och ger snabba resultat för färska måltider.",
        tags: ["fast", "edible", "green"],
        author: "Grönis",
        avatar: "/Assets/images/avatars/avatar-1.svg",
        date: "2024-12-06"
    },
    {
        id: 6,
        title: "Ormbunke",
        content: "En klassisk växt som passar perfekt i badrummet eller på skuggiga platser.",
        tags: ["air", "green", "decorative"],
        author: "Naturvännen",
        avatar: "/Assets/images/avatars/avatar-2.svg",
        date: "2024-12-08"
    }
];

function populate() {
    document.getElementById("posts").innerHTML = "";
    posts.forEach(addItem);

    function addItem(item) {
        let title = item.title;
        let content = item.content;
        let image = "https://picsum.photos/200";
        let author = item.author;
        //let avatar = "https://avatar.iran.liara.run/public/94";
        let avatar = item.avatar;
        let tags = item.tags;
        let date = item.date;

        let html = [];
        html.push('<li class="card-item">', '<article>');
        html.push('<figure><img src="', image, '" width="200" height="250" alt="Bild på ', title, ' från ', author, '"></figure>');
        html.push('<div class="watermark"></div>');
        html.push('<ul class="tags">');

        tags.forEach(addTag);
        function addTag(tag) {
            var label = TAGS[tag];
            html.push('<li data-', tag, '>', label, '</li>');
        }

        html.push('</ul>');
        html.push('<h3>', title, '</h3>');
        html.push('<p>', content, '</p>');
        html.push('<footer>');
        html.push('<figure><img src="', avatar, '" width="100" height="100" alt="Visningsbild för ', author, ' "></figure>');
        html.push('<aside><p>', author, '</p><time datetime="', date, '">', date, '</time></aside>');
        html.push('</footer></article></li>');
        let posts = document.getElementById("posts");
        posts.innerHTML += html.join("");
    }
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function () {
    populate();
});