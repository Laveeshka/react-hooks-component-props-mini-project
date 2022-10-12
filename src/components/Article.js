function Article({ title, date = "January 1, 1970", preview, minutes }){
    const step = minutes < 30? 5 : 10;
    const emoji = step === 5? "☕️" : "🍱";
    let readTime = "";

    for (let i = 1; i <= minutes; i+=step){
        readTime +=emoji;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} ．{readTime} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;