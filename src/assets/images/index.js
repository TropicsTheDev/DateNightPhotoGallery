const images = [
  {
    src: "IMG_0",
    quote: {
      cite: {
        author: "Anne Louise Germaine de Staël",
        work: "CORINNE",
      },
      text: "Love is the emblem of eternity; it confounds all notion of time; effaces all memory of a beginning, all fear of an end.",
    },
  },
  {
    src: "IMG_1",
    quote: {
      cite: {
        author: "Charles Dickens",
        work: "GREAT EXPECTATIONS",
      },
      text: "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
    },
  },
  {
    src: "IMG_2",
    quote: {
      cite: { author: "Jalaluddin Rumi", work: "THE ILLUSTRATED" },
      text: "The minute I heard my first love story, I started looking for you.",
    },
  },
  {
    src: "IMG_3",
    quote: {
      cite: { author: "Victor Hugo", work: "LES MISÉRABLES" },
      text: "To love or have loved, that is enough. Ask nothing further.",
    },
  },
  {
    src: "IMG_4",
    quote: {
      cite: { author: "Ernest Hemingway", work: "THE AGE OF INNOCENCE" },
      text: "Each time you happen to me all over again.",
    },
  },
  {
    src: "IMG_5",
    quote: {
      cite: { author: "Vladimir Nabokov", work: "LOLITA" },
      text: "It was love at first sight, at last sight, at ever and ever sight.",
    },
  },
  // {
  //   src: "IMG_6",
  //   quote: {
  //     cite: { author: "Cassandra Clare", work: "CITY OF GLASS" },
  //     text: "You could have had anything else in the world, and you asked for me.",
  //   },
  // },
  // {
  //   src: "IMG_7",
  //   quote: {
  //     cite: { author: "", work: "" },
  //     text: "",
  //   },
  // },
  {
    src: "IMG_8",
    quote: {
      cite: { author: "Cassandra Clare", work: "CITY OF GLASS" },
      text: "You could have had anything else in the world, and you asked for me.",
    },
  },
  {
    src: "IMG_9",
    quote: {
      cite: { author: "Stephanie Perkins", work: "ANNA AND THE FRENCH KISS" },
      text: "For the two of us, home isn’t a place. It is a person. And we are finally home.",
    },
  },
  {
    src: "IMG_10",
    quote: {
      cite: { author: "Frances Burney", work: "EVELINA" },
      text: "“You are the friend to whom my soul is attached as to its better half. You are dearer to me than language has the power of telling.",
    },
  },
  {
    src: "IMG_11",
    quote: {
      cite: { author: "", work: "" },
      text: "",
    },
  },
  {
    src: "IMG_12",
    quote: {
      cite: { author: "Haruki Murakami", work: "KAFKA ON THE SHORE" },
      text: "If you remember me, then I don’t care if everyone else forgets.",
    },
  },
  {
    src: "IMG_13",
    quote: {
      cite: { author: "Nicholas Sparks", work: "THE NOTEBOOK" },
      text: "I am nothing special, of this I am sure. I am a common man with common thoughts and I’ve led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I’ve loved another with all my heart and soul, and to me, this has always been enough.",
    },
  },
  {
    src: "IMG_14",
    quote: {
      cite: { author: "Virginia Woolf", work: "SELECTED DIARIES" },
      text: "In case you ever foolishly forget: I am never not thinking of you.",
    },
  },
  {
    src: "IMG_15",
    quote: {
      cite: { author: "William Shakespeare", work: "HAMLET" },
      text: "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love.",
    },
  },
  {
    src: "IMG_16",
    quote: {
      cite: { author: "William Faulkner", work: "THE SOUND AND THE FURY" },
      text: "You don’t love because, you love despite; not for the virtues, but despite the faults.",
    },
  },
  {
    src: "IMG_17",
    quote: {
      cite: { author: "E.M. Forster", work: "A ROOM WITH A VIEW" },
      text: "I know from experience that the poets are right: love is eternal.",
    },
  },
  {
    src: "IMG_18",
    quote: {
      cite: { author: "Henry James", work: "THE PORTRAIT OF A LADY" },
      text: "It has made me better loving you ... it has made me wiser, and easier, and brighter.",
    },
  },
  {
    src: "IMG_19",
    quote: {
      cite: { author: "Truman Capote", work: "OTHER VOICES, OTHER ROOMS" },
      text: "Love, having no geography, knows no boundaries: weight and sink it deep, no matter, it will rise and find the surface.",
    },
  },
  {
    src: "IMG_20",
    quote: {
      cite: { author: "F. Scott Fitzgerald", work: "TENDER IS THE NIGHT" },
      text: "I don’t ask you to love me always like this, but I ask you to remember. Somewhere inside me there’ll always be the person I am tonight.",
    },
  },
  {
    src: "IMG_21",
    quote: {
      cite: {
        author: "Chimamanda Ngozi Adichie",
        work: "HALF OF A YELLOW SUN",
      },
      text: "This was love: a string of coincidences that gathered significance and became miracles.",
    },
  },
  {
    src: "IMG_22",
    quote: {
      cite: { author: "Maggie Stiefvater", work: "FOREVER" },
      text: "And then I did laugh, even though the future was a dangerous place, because I loved her, and she loved me, and the world was beautiful.",
    },
  },
  {
    src: "IMG_23",
    quote: {
      cite: { author: "F. Scott Fitzgerald", work: "THE GREAT GATSBY" },
      text: "There I was, way off my ambitions, getting deeper in love every minute.",
    },
  },
  {
    src: "IMG_24",
    quote: {
      cite: { author: "Sarah Dessen", work: "THIS LULLABY" },
      text: "You know, when it works, love is pretty amazing. It’s not overrated. There’s a reason for all those songs.",
    },
  },
  {
    src: "IMG_25",
    quote: {
      cite: { author: "Mitch Albom", work: "TUESDAYS WITH MORRIE" },
      text: "I like myself better when I’m with you.",
    },
  },
  {
    src: "IMG_26",
    quote: {
      cite: { author: "Paul", work: "1 Corinthians" },
      text: "Love suffers long and is kind; love does not envy; love does not parade itself, is not puffed up; 5 does not behave rudely, does not seek its own, is not provoked, thinks no evil; 6 does not rejoice in iniquity, but rejoices in the truth;",
    },
  },
  {
    src: "IMG_27",
    quote: {
      cite: { author: "Lauren Oliver", work: "DELIRIUM" },
      text: "Love: a single word, a wispy thing, a word no bigger or longer than an edge. That’s what it is: an edge, a razor. It draws up through the center of your life, cutting everything in two. Before and after. The rest of the world falls away on either side.",
    },
  },
  {
    src: "IMG_28",
    quote: {
      cite: { author: "Mitch Albom", work: "FOR ONE MORE DAY" },
      text: "You can find something truly important in an ordinary minute.",
    },
  },
];

export default images;
