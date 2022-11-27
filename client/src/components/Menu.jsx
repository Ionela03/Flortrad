import React from 'react'
import globe from "../images/Globe.jpg"
import WorldHands from "../images/WorldHands.jpg"
const Menu = () => {
    const posts=[
        {
            id:1,
            title:"Decriere",
            desc:"Firma noastră a fost înfiinţată în anul 2006 şi constă într-o echipă tânără, unită şi cu experienţă în domeniul traducerilor şi a interpretariatului. Am evoluat cu entuziasm, profesionalism şi am investit timp în calitatea serviciilor noastre pentru a ne mulţumi clienţii. Reuşita noastră se datorează echipei formate din traducători devotaţi şi pasionaţi de această meserie. Aceştia deţin autorizaţie eliberată fie de Ministerul Justiţiei ori de Ministerul Cultelor şi Culturii. Lucrăm numai cu traducători autorizați, astfel încât traducerile noastre să fie la un standard ridicat și consecvent.Cheia succesului, considerăm noi, este promptitudinea cu care rezolvăm problemele clienţilor, seriozitatea dar şi calitatea traducerilor. Avem posibilitatea să ne adaptăm cerinţelor clienţilor printr-un program flexibil, părerea acestora fiind foarte importantă pentru noi. ",
            img:globe,
        },
        {
            id:2,
            title:"Servicii",
            desc:" 1.Traduceri autorizate (de către traducătorul autorizat)\n 2. Traduceri legalizate (de către un notar public)\n 3. Interpretare (traducere orală la birouri notariale, la instituțiile statului, bănci, cabinete de avocați, întâlniri de afaceri, etc.) Asigurăm servicii de interpretare în special pentru întocmirea de acte notariale, la căsătorii, pentru înfiinţări de firme, pentru afaceri, etc.). De asemenea, putem asigura interpretare și telefonic.\n 4. Legalizări notariale pentru traduceri; copii legalizate 5. Aplicarea Apostilei de la Haga (atât pe documentele în original cât și pe traduceri) \n6. Obținere de acte românești pentru românii aflați în străinătate (în baza unei procuri notariale)\n 7. Transcriere  ",
            img:WorldHands,
        }
    ];
    return(
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
            
        </div>
    )
}

export default Menu