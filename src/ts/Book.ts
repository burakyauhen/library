import theBookEathers from '../img/favorites/the_book_eaters.png';
import cackle from '../img/favorites/cackle.png';
import dantePoetOfTheSecularWorld from '../img/favorites/dante_poet_of_the_secular_world.png';
import theLastQueen from '../img/favorites/the_last_queen.png';
import theBody from '../img/favorites/the_body.png';
import carryAMemoirOfSurvivalOnStole from "../img/favorites/carry_a_memoir_of_survival_on_stole.png";
import daysOfDistraction from "../img/favorites/days_of_distraction.png";
import dominicana from "../img/favorites/dominicana.png";
import crudeAMemoir from "../img/favorites/crude_a_memoir.png";
import letMyPeopleGoSurfing from "../img/favorites/let_my_people_go_surfing.png";
import theOctopusMuseumPoem from "../img/favorites/the_octopus_museum_poem.png";
import sharkDialoguesANovel from "../img/favorites/shark_dialogues_a_novel.png";
import casualConversation from "../img/favorites/casual_conversation.png";
import theGreatFire from "../img/favorites/the_great_fire.png";
import rickeyTheLifeAndLegend from "../img/favorites/rickey_the_life_and_legend.png";
import slugAndOterStories from  "../img/favorites/slug_and_oter_stories.png";

const favoriteDate: { [key: string]: Array<IBook> } = {
    winter: [
        {
            staff: "Staff Picks",
            header: "The Book Eater",
            author: "By Sunyi Dean",
            description: "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.",
            imageUrl: theBookEathers,
        },
        {
            staff: "Staff Picks",
            header: "Cackle",
            author: "By Rachel Harrison",
            description: "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",
            imageUrl: cackle,

        },
        {
            staff: "Staff Picks",
            header: "Dante: Poet of the Secular World",
            author: "By Erich Auerbach",
            description: "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
            imageUrl: dantePoetOfTheSecularWorld,

        },
        {
            staff: "Staff Picks",
            header: "The Last Queen",
            author: "By Clive Irving",
            description: "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",
            imageUrl: theLastQueen,

        },
    ],
    spring: [
        {
            staff: "Staff Picks",
            header: "The Body",
            author: "By Stephen King",
            description: "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.",
            imageUrl: theBody,
        },
        {
            staff: "Staff Picks",
            header: "Carry: A Memoir of Survival on Stolen Land",
            author: "By Toni Jenson",
            description: "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
            imageUrl: carryAMemoirOfSurvivalOnStole,
        },
        {
            staff: "Staff Picks",
            header: "Days of Distraction",
            author: "By Alexandra Chang",
            description: "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.",
            imageUrl: daysOfDistraction,
        },
        {
            staff: "Staff Picks",
            header: "Dominicana",
            author: "By Angie Cruz",
            description: "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.",
            imageUrl: dominicana,
        },
    ],
    summer: [
        {
            staff: "Staff Picks",
            header: "Crude: A Memoi",
            author: "By Pablo Fajardo & ​​Sophie Tardy-Joubert",
            description: "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people",
            imageUrl: crudeAMemoir,
        },
        {
            staff: "Staff Picks",
            header: "Let My People Go Surfing",
            author: "By Yvon Chouinard",
            description: "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.",
            imageUrl: letMyPeopleGoSurfing,
        },
        {
            staff: "Staff Picks",
            header: "The Octopus Museum: Poems",
            author: "By Brenda Shaughnessy",
            description: "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.",
            imageUrl: theOctopusMuseumPoem,
        },
        {
            staff: "Staff Picks",
            header: "Shark Dialogues: A Novel",
            author: "By Kiana Davenport",
            description: "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.",
            imageUrl: sharkDialoguesANovel,
        },
    ],
    autumn: [
        {
            staff: "Staff Picks",
            header: "Casual Conversation",
            author: "By Renia White",
            description: "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ",
            imageUrl: casualConversation,
        },
        {
            staff: "Staff Picks",
            header: "The Great Fire",
            author: "By Lou Ureneck",
            description: "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide",
            imageUrl: theGreatFire,
        },
        {
            staff: "Staff Picks",
            header: "Rickey: The Life and Legend",
            author: "By Howard Bryant",
            description: "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
            imageUrl: rickeyTheLifeAndLegend,
        },
        {
            staff: "Staff Picks",
            header: "Slug: And Other Stories",
            author: "By Megan Milks",
            description: "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.",
            imageUrl: slugAndOterStories,
        },
    ]
};

interface IBook {
    staff: string;
    header: string;
    author: string;
    description: string
    imageUrl?: string
}

class Book {
    staff?: string;
    header?: string;
    author?: string;
    description?: string;
    imageUrl?: string;
    
    constructor(book: IBook) {
        this.staff = book.staff;
        this.header = book.header;
        this.author = book.author;
        this.description = book.description;
        this.imageUrl = book.imageUrl;
    }

    public generateBook() {
        let template = "";
        const bookContent = document.createElement('div');
        bookContent.className = 'book-content';

        this.staff && 
        (template += `<p class="book-content__staff">${this.staff}</p>`);

        this.header && 
        (template +=`<h4 class="book-content__header">${this.header}</h4>`);

        this.author && 
        (template += ` <p class="book-content__author">${this.author}</p>`);

        this.description && 
        (template += `<p class="book-content__description">${this.description}</p>`);

        this.imageUrl && 
        (template += `<img class="book-content__image" src="${this.imageUrl}" alt="cover of book">`);

        template += `<button class="button button_disabled">Buy</button>`
        bookContent.innerHTML = template;

        return bookContent;
    }
}

export { Book, favoriteDate, IBook }