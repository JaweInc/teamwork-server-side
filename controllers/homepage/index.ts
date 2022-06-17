const HomePage = ({req, res}: any) => {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Welcome To Teamwork!'
        })
    } catch {
        res.status(400).json({
            status: 'error',
            message: 'an error occured!... Updating system'
        })
    }
}
export default HomePage