// @desc    Get all transactions
// @route   Get /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc    Add transactions
// @route   Post /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
    res.send('Post transactions');
}

// @desc    Delete transactions
// @route   DELETE /api/v1/transaction/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}