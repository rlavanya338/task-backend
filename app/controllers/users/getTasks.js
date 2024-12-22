const tasks = require('../../model/task')


const getAllTasks = async (req, res) => {
    try {
        const data = await tasks.find({})
        if (data?.length > 0) {
            res.status(200).json({
                success: true,
                message: 'Tasks Data Fetched Successfully',
                result: data
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'No Tasks Found',
                result: null
            })
        }
    } catch (error) {
        console.log(error, 'err');
    }
}



module.exports = { getAllTasks }