const task = require('../../model/task')


const deleteTask = async (req, res) => {
    try {
        const findTask = await task.findOne({ _id: req?.params?.id })
        if (findTask) {
            const data = await task.findOneAndDelete({ _id: req?.params?.id })
            if (data) {
                res.status(200).json({
                    success: true,
                    message: 'Task Deleted Successfully',
                    result: null
                })
            }
            else {
                res.status(200).json({
                    success: false,
                    message: 'Something Went Wrong',
                    result: null
                })
            }
        }
        else {
            res.status(200).json({
                success: false,
                message: 'Task Not Found',
                result: null
            })
        }
    } catch (error) {
        console.log(error, 'err');
    }
}

module.exports = { deleteTask }