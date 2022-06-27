import db from '../../../orm/orm'

const Article = async (req: any, res: any) => {
    const { id } = req.params
    try {
        const getArticle = await db.selectAll('add_article', {id})
        const article = getArticle?.rows?.[0];

        if (getArticle.rows.length === 0) {
            return res.status(403).json({
                status: 'error',
                message: 'Unable to get article'
            })
        }

        return res.status(200).json({
            status: 'success',
            message: article
        })
    } catch {
        return res.status(400).json({
            status: 'error',
            message: 'Ops!! Something went wrong'
        })
    }
}

export default Article;