import connect from '../../../utils/DbConnect';
const Feeds = async (req: any, res: any) => {
    try {
        const getFeeds = await connect.query(
        `
            SELECT 'article' AS Type, a.id AS id, a.employee_id AS employee_id, a.title AS title, a.article AS post, a.created AS created, a.resource_id AS resource_id
            FROM add_article a
            UNION
            SELECT 'gif', b.id AS id, b.employee_id AS employee_id, b.title AS title, b.image AS image, b.created AS created, b.resource_id AS resource_id
            FROM add_gif b
            ORDER BY created DESC
        `)

        if (getFeeds?.rows?.[0].length === 0) {
            return res.status(403).json({
                status: 'error',
                message: 'Cannot get feeds'
            })
        }

        return res.status(200).json({
            data: getFeeds?.rows
        })
    } catch {
        return res.status(400).json({
            status: 'error',
            message: 'Ops!! Something went wrong'
        })
    }
}

export default Feeds