import Article from "./Article"

function ArticleList({ posts }) {

    const articles = posts.map((post) => {
        return <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;