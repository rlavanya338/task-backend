const task = require('../../model/task')

const taskAction = async (req, res) => {
    try {
        const id = req?.params?.id
        const findTask = await task.findOne({ _id: id })
        if (findTask) {
            if (findTask.status == 'incomplete') {
                const updateTask = await task.findOneAndUpdate({ _id: id }, { $set: { status: 'completed' } })
                if (updateTask) {
                    res.status(200).json({
                        success: true,
                        message: 'Task Completed',
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
                const updateTask = await task.findOneAndUpdate({ _id: id }, { $set: { status: 'incomplete' } })
                if (updateTask) {
                    res.status(200).json({
                        success: true,
                        message: 'Task inCompleted',
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

module.exports = { taskAction }